const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require('crypto');
admin.initializeApp();

// PayPal webhook verification function
function verifyPayPalWebhook(req, webhookId) {
  // For production, implement proper PayPal webhook verification
  // See: https://developer.paypal.com/docs/api/webhooks/v1/#verify-webhook-signature
  
  const transmissionId = req.headers['paypal-transmission-id'];
  const timestamp = req.headers['paypal-transmission-time'];
  const certUrl = req.headers['paypal-cert-url'];
  const authAlgo = req.headers['paypal-auth-algo'];
  const actualSignature = req.headers['paypal-transmission-sig'];
  
  // In production, you would:
  // 1. Verify the certificate URL is from PayPal
  // 2. Download and verify the certificate
  // 3. Create the expected signature
  // 4. Compare signatures
  
  // For now, we'll accept all webhooks (not recommended for production)
  return true;
}

exports.paypalWebhook = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const event = req.body;

  // Verify webhook signature in production
  if (process.env.NODE_ENV === 'production') {
    const webhookId = process.env.PAYPAL_WEBHOOK_ID;
    if (!verifyPayPalWebhook(req, webhookId)) {
      console.error('Invalid PayPal webhook signature');
      return res.status(401).send('Unauthorized');
    }
  }

  try {
    // Only process completed payments and subscription events
    if (
      event.event_type === 'PAYMENT.SALE.COMPLETED' ||
      event.event_type === 'CHECKOUT.ORDER.APPROVED' ||
      event.event_type === 'BILLING.SUBSCRIPTION.ACTIVATED' ||
      event.event_type === 'BILLING.SUBSCRIPTION.CANCELLED' ||
      event.event_type === 'BILLING.SUBSCRIPTION.EXPIRED'
    ) {
      const sale = event.resource;
      const payerEmail = sale.payer?.payer_info?.email || sale.payer?.email_address || sale.subscriber?.email_address;
      const amount = sale.amount?.total || sale.amount?.value || sale.billing_agreement_id;
      const currency = sale.amount?.currency || sale.amount?.currency_code || 'MXN';
      const transactionId = sale.id || sale.purchase_units?.[0]?.payments?.captures?.[0]?.id || sale.billing_agreement_id;
      const custom = sale.custom || sale.custom_id || sale.purchase_units?.[0]?.custom_id || '';
      const itemName = sale.item_name || sale.description || 'HablaYa! Subscription';

      let userId = custom;
      if (!userId && payerEmail) {
        // Fallback: look up user by email
        const users = await admin.firestore().collection('users').where('email', '==', payerEmail).get();
        if (!users.empty) userId = users.docs[0].id;
      }

      if (userId) {
        // Determine subscription type based on item name
        let subscriptionType = 'premium';
        let subscriptionEnd = null;
        
        if (itemName.includes('5-Year') || itemName.includes('5 Años') || itemName.includes('5 Anos')) {
          subscriptionType = 'fiveYear';
          subscriptionEnd = new Date();
          subscriptionEnd.setFullYear(subscriptionEnd.getFullYear() + 5);
        } else if (itemName.includes('2-Year') || itemName.includes('2 Años') || itemName.includes('2 Anos')) {
          subscriptionType = 'twoYear';
          subscriptionEnd = new Date();
          subscriptionEnd.setFullYear(subscriptionEnd.getFullYear() + 2);
        } else if (itemName.includes('Annual') || itemName.includes('Anual')) {
          subscriptionType = 'annual';
          subscriptionEnd = new Date();
          subscriptionEnd.setFullYear(subscriptionEnd.getFullYear() + 1);
        } else if (itemName.includes('Quarterly') || itemName.includes('Trimestral')) {
          subscriptionType = 'quarterly';
          subscriptionEnd = new Date();
          subscriptionEnd.setMonth(subscriptionEnd.getMonth() + 3);
        } else if (itemName.includes('Monthly') || itemName.includes('Mensual')) {
          subscriptionType = 'monthly';
          subscriptionEnd = new Date();
          subscriptionEnd.setMonth(subscriptionEnd.getMonth() + 1);
        }

        // Handle subscription cancellation/expiration
        if (event.event_type === 'BILLING.SUBSCRIPTION.CANCELLED' || event.event_type === 'BILLING.SUBSCRIPTION.EXPIRED') {
          await admin.firestore().collection('users').doc(userId).update({
            subscription: 'expired',
            subscriptionEnd: admin.firestore.Timestamp.fromDate(new Date()),
            trialActive: false,
            canAccessTutor: false
          });
          
          console.log(`User ${userId} subscription expired/cancelled`);
        } else {
          // Record the transaction
          await admin.firestore().collection('users').doc(userId).collection('transactions').add({
            transactionId,
            amount,
            currency,
            payerEmail,
            itemName,
            subscriptionType,
            date: admin.firestore.FieldValue.serverTimestamp(),
            description: 'PayPal Subscription',
            raw: sale
          });

          // Update subscription status and access control
          await admin.firestore().collection('users').doc(userId).update({
            subscription: subscriptionType,
            subscriptionEnd: subscriptionEnd ? admin.firestore.Timestamp.fromDate(subscriptionEnd) : null,
            trialActive: false,
            canAccessTutor: true,
            lastPaymentDate: admin.firestore.FieldValue.serverTimestamp(),
            paymentMethod: 'paypal'
          });

          console.log(`Updated user ${userId} subscription to ${subscriptionType}`);
        }
      } else {
        console.error('No user found for email:', payerEmail);
      }
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('Error processing PayPal webhook:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Function to check user access to language tutor
exports.checkUserAccess = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }

  const userId = context.auth.uid;
  
  try {
    const userDoc = await admin.firestore().collection('users').doc(userId).get();
    
    if (!userDoc.exists) {
      throw new functions.https.HttpsError('not-found', 'User not found');
    }

    const userData = userDoc.data();
    
    // Check if user has active subscription or trial
    const hasActiveSubscription = userData.subscription && userData.subscription !== 'expired';
    const hasActiveTrial = userData.trialActive && userData.trialEnd && 
                          userData.trialEnd.toDate() > new Date();
    const canAccess = userData.canAccessTutor || hasActiveSubscription || hasActiveTrial;

    return {
      canAccess,
      subscription: userData.subscription,
      trialActive: hasActiveTrial,
      trialEnd: userData.trialEnd,
      subscriptionEnd: userData.subscriptionEnd
    };
  } catch (error) {
    console.error('Error checking user access:', error);
    throw new functions.https.HttpsError('internal', 'Error checking user access');
  }
}); 