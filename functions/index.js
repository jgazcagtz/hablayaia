const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.paypalWebhook = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const event = req.body;

  // For real deployment, verify the webhook with PayPal!
  // See: https://developer.paypal.com/docs/api/webhooks/v1/#verify-webhook-signature

  // Only process completed payments
  if (
    event.event_type === 'PAYMENT.SALE.COMPLETED' ||
    event.event_type === 'CHECKOUT.ORDER.APPROVED'
  ) {
    const sale = event.resource;
    const payerEmail = sale.payer?.payer_info?.email || sale.payer?.email_address;
    const amount = sale.amount?.total || sale.amount?.value;
    const currency = sale.amount?.currency || sale.amount?.currency_code;
    const transactionId = sale.id || sale.purchase_units?.[0]?.payments?.captures?.[0]?.id;
    const custom = sale.custom || sale.custom_id || sale.purchase_units?.[0]?.custom_id || '';

    let userId = custom;
    if (!userId && payerEmail) {
      // Fallback: look up user by email
      const users = await admin.firestore().collection('users').where('email', '==', payerEmail).get();
      if (!users.empty) userId = users.docs[0].id;
    }

    if (userId) {
      // Record the transaction
      await admin.firestore().collection('users').doc(userId).collection('transactions').add({
        transactionId,
        amount,
        currency,
        payerEmail,
        date: admin.firestore.FieldValue.serverTimestamp(),
        description: 'PayPal Subscription',
        raw: sale
      });

      // Update subscription status
      await admin.firestore().collection('users').doc(userId).update({
        subscription: 'premium',
        trialActive: false
      });
    }
  }

  res.status(200).send('OK');
}); 