# HablaYa! - AI Language Learning Platform

A modern language learning platform with AI-powered conversations, 7-day free trials, and PayPal integration.

## Features

- 🎓 7-day free trial for new users
- 💳 PayPal payment integration
- 🔐 Firebase authentication
- 📊 User dashboard with progress tracking
- 🌍 Support for 5 languages (English, Spanish, Portuguese, Italian, French)
- 🤖 AI-powered conversation practice
- 📱 Responsive design

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase Cloud Functions
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Payments**: PayPal
- **Deployment**: Vercel (Frontend) + Firebase (Backend)

## Deployment Instructions

### 1. Frontend (Vercel)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy - Vercel will automatically detect it's a static site

### 2. Backend (Firebase Functions)

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Deploy Cloud Functions:
   ```bash
   firebase deploy --only functions
   ```

### 3. PayPal Webhook Setup

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Create a webhook with URL:
   ```
   https://us-central1-hablaya-79760.cloudfunctions.net/paypalWebhook
   ```
3. Subscribe to events:
   - `PAYMENT.SALE.COMPLETED`
   - `CHECKOUT.ORDER.APPROVED`

## Environment Variables

No environment variables needed for frontend deployment on Vercel.

## Project Structure

```
hablayaia-main/
├── index.html          # Main landing page
├── script.js           # Frontend JavaScript
├── chatbot.js          # AI chatbot functionality
├── style.css           # Styles
├── functions/          # Firebase Cloud Functions
│   ├── index.js        # PayPal webhook handler
│   └── package.json    # Function dependencies
├── firebase.json       # Firebase configuration
├── .firebaserc         # Firebase project settings
└── README.md           # This file
```

## Support

For issues or questions, please contact the development team. 