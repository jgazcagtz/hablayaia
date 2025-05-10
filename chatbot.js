// chatbot.js - AI-Powered Virtual Assistant for HablaYa
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced chatbot configuration
    const chatbotConfig = {
        botName: 'HablaYa AI Tutor',
        primaryColor: '#4361ee',
        accentColor: '#f72585',
        position: 'bottom-right',
        greetingMessage: '¡Hola! 👋 I\'m your HablaYa AI Tutor. Ready to achieve English fluency through natural conversations? How can I help you today?',
        user: null,
        unreadMessages: 0
    };

    // Initialize Firebase (using same config as script.js)
    const firebaseConfig = {
        apiKey: "AIzaSyDCgyLbGewcv6zfz7eCSNBKmhPF3fKurew",
        authDomain: "hablaya-79760.firebaseapp.com",
        projectId: "hablaya-79760",
        storageBucket: "hablaya-79760.appspot.com",
        messagingSenderId: "933344055830",
        appId: "1:933344055830:web:d39edec28fc6395e259b37"
    };

    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const auth = firebase.auth();
    const db = firebase.firestore();

    // Enhanced conversation flow with sales-focused approach
    const conversationFlow = {
        welcome: {
            message: chatbotConfig.greetingMessage,
            options: [
                { text: '🚀 How does HablaYa work?', next: 'howItWorks', emoji: '🚀' },
                { text: '💰 See pricing plans', next: 'pricing', emoji: '💰' },
                { text: '🎓 Start free trial', next: 'freeTrial', emoji: '🎓' },
                { text: '💬 Success stories', next: 'testimonials', emoji: '💬' }
            ]
        },
        howItWorks: {
            message: 'HablaYa revolutionizes language learning with:<br><br>' +
                     '✨ <strong>AI Conversations</strong> - Practice real dialogues with our smart chatbot<br>' +
                     '🎯 <strong>Personalized Learning</strong> - AI adapts to your level and interests<br>' +
                     '📈 <strong>Instant Feedback</strong> - Get corrections on pronunciation and grammar<br>' +
                     '⏱️ <strong>24/7 Availability</strong> - Learn anytime, anywhere<br><br>' +
                     'Our students typically see <strong>2x faster progress</strong> compared to traditional methods!',
            options: [
                { text: '💰 See plans & pricing', next: 'pricing', emoji: '💰' },
                { text: '🎓 Start free trial', next: 'freeTrial', emoji: '🎓' },
                { text: '🔙 Back to menu', next: 'welcome', emoji: '🔙' }
            ]
        },
        pricing: {
            message: 'Choose the plan that fits your goals:<br><br>' +
                     '💎 <strong>Annual Plan</strong> - $1,799 MXN/year <small>(save 10%)</small><br>' +
                     '• Only $150 MXN/month<br>' +
                     '• <em>Best value - most popular!</em><br><br>' +
                     '📅 <strong>Monthly Plan</strong> - $179 MXN/month<br>' +
                     '• Flexible commitment<br><br>' +
                     '✅ Both include:<br>' +
                     '- Unlimited AI conversations<br>' +
                     '- Speech recognition<br>' +
                     '- Progress tracking<br>' +
                     '- 30-day money back guarantee',
            options: [
                { text: '💳 Subscribe now', next: 'subscribe', emoji: '💳' },
                { text: '🎓 Try free trial', next: 'freeTrial', emoji: '🎓' },
                { text: '💬 See testimonials', next: 'testimonials', emoji: '💬' },
                { text: '🔙 Back to menu', next: 'welcome', emoji: '🔙' }
            ]
        },
        freeTrial: {
            message: '🎉 Get 7 days FREE access to all HablaYa features!<br><br>' +
                     'No credit card required. Start improving your English today:',
            options: () => {
                const baseOptions = [
                    { text: '💰 See pricing plans', next: 'pricing', emoji: '💰' },
                    { text: '🔙 Back to menu', next: 'welcome', emoji: '🔙' }
                ];
                
                if (chatbotConfig.user) {
                    return [
                        { text: '🚀 Start practicing now', next: 'startPractice', emoji: '🚀' },
                        ...baseOptions
                    ];
                } else {
                    return [
                        { text: '👤 Sign up for free', next: 'signup', emoji: '👤' },
                        { text: '🔐 I already have an account', next: 'login', emoji: '🔐' },
                        ...baseOptions
                    ];
                }
            }
        },
        testimonials: {
            message: 'Here\'s what our students say:<br><br>' +
                     '⭐️⭐️⭐️⭐️⭐️<blockquote>"I went from basic to fluent conversations in 3 months! The AI adapts perfectly to my level." - Carlos M.</blockquote>' +
                     '⭐️⭐️⭐️⭐️⭐️<blockquote>"The pronunciation feedback changed everything. My coworkers noticed my improvement immediately!" - Ana L.</blockquote>' +
                     '⭐️⭐️⭐️⭐️⭐️<blockquote>"As a busy professional, I love practicing during my commute. The AI remembers my progress!" - Diego R.</blockquote>',
            options: [
                { text: '🎓 Start free trial', next: 'freeTrial', emoji: '🎓' },
                { text: '💰 See pricing', next: 'pricing', emoji: '💰' },
                { text: '🔙 Back to menu', next: 'welcome', emoji: '🔙' }
            ]
        },
        subscribe: {
            message: '🚀 Ready to become fluent?<br><br>' +
                     'You\'ll be redirected to our secure payment page to complete your subscription.',
            options: [
                { text: '💳 Continue to payment', next: 'processPayment', emoji: '💳' },
                { text: '🎓 Try free trial first', next: 'freeTrial', emoji: '🎓' },
                { text: '🔙 Back to plans', next: 'pricing', emoji: '🔙' }
            ]
        },
        processPayment: {
            message: '🔒 Redirecting to secure payment...<br><br>' +
                     '<div class="loading-spinner"></div>',
            action: () => {
                setTimeout(() => {
                    window.open('https://hablaya.site/pricing', '_blank');
                    showConversationStep('paymentComplete');
                }, 2000);
            }
        },
        paymentComplete: {
            message: '🎉 Subscription successful!<br><br>' +
                     'You now have full access to HablaYa. Start practicing immediately!',
            options: [
                { text: '🚀 Start practicing', next: 'startPractice', emoji: '🚀' },
                { text: '🏠 Back to menu', next: 'welcome', emoji: '🏠' }
            ]
        },
        signup: {
            message: 'Create your free account:<br><br>' +
                     '<form id="chatbot-signup" class="chatbot-form">' +
                     '<input type="text" placeholder="Your name" required>' +
                     '<input type="email" placeholder="Email" required>' +
                     '<input type="password" placeholder="Password (min 6 chars)" required>' +
                     '<button type="submit">Create Account</button>' +
                     '</form>',
            options: [
                { text: '🔐 Already have an account? Log in', next: 'login', emoji: '🔐' },
                { text: '🔙 Back', next: 'freeTrial', emoji: '🔙' }
            ]
        },
        login: {
            message: 'Log in to your account:<br><br>' +
                     '<form id="chatbot-login" class="chatbot-form">' +
                     '<input type="email" placeholder="Email" required>' +
                     '<input type="password" placeholder="Password" required>' +
                     '<button type="submit">Log In</button>' +
                     '</form>',
            options: [
                { text: '👤 Need an account? Sign up', next: 'signup', emoji: '👤' },
                { text: '🔙 Back', next: 'freeTrial', emoji: '🔙' }
            ]
        },
        startPractice: {
            message: 'Choose your practice mode:',
            options: [
                { text: '🇬🇧 Practice English', next: 'startEnglish', emoji: '🇬🇧' },
                { text: '🇪🇸 Practice Spanish', next: 'startSpanish', emoji: '🇪🇸' },
                { text: '🔙 Back', next: 'welcome', emoji: '🔙' }
            ]
        },
        startEnglish: {
            message: 'Opening English practice session...<br><br>' +
                     '<div class="loading-spinner"></div>',
            action: () => {
                startNewSession('english');
            }
        },
        startSpanish: {
            message: 'Opening Spanish practice session...<br><br>' +
                     '<div class="loading-spinner"></div>',
            action: () => {
                startNewSession('spanish');
            }
        },
        faq: {
            message: 'Frequently Asked Questions:<br><br>' +
                     '<strong>Q: How does the AI work?</strong><br>' +
                     'A: Our AI analyzes your responses and adapts conversations to your level.<br><br>' +
                     '<strong>Q: Can I cancel anytime?</strong><br>' +
                     'A: Yes! Cancel anytime with no penalties.<br><br>' +
                     '<strong>Q: Is there a mobile app?</strong><br>' +
                     'A: Yes! Available on iOS and Android.<br><br>' +
                     '<strong>Q: How do I track progress?</strong><br>' +
                     'A: Your dashboard shows metrics and improvement over time.',
            options: [
                { text: '🎓 Start free trial', next: 'freeTrial', emoji: '🎓' },
                { text: '💰 See pricing', next: 'pricing', emoji: '💰' },
                { text: '🔙 Back', next: 'welcome', emoji: '🔙' }
            ]
        }
    };

    // Create chatbot elements with enhanced UI
    function createChatbotElements() {
        // Main container
        const chatbotContainer = document.createElement('div');
        chatbotContainer.id = 'hablaya-chatbot';
        chatbotContainer.className = 'hablaya-chatbot-container';
        chatbotContainer.setAttribute('aria-hidden', 'true');
        
        // Floating button with notification badge
        const chatbotButton = document.createElement('button');
        chatbotButton.id = 'hablaya-chatbot-button';
        chatbotButton.className = 'hablaya-chatbot-button';
        chatbotButton.setAttribute('aria-label', 'Open HablaYa assistant');
        chatbotButton.innerHTML = `
            <i class="fas fa-comment-dots"></i>
            <span id="chatbot-notification" class="chatbot-notification-badge">${chatbotConfig.unreadMessages || ''}</span>
        `;
        
        // Chat window
        const chatWindow = document.createElement('div');
        chatWindow.id = 'hablaya-chatbot-window';
        chatWindow.className = 'hablaya-chatbot-window';
        chatWindow.setAttribute('aria-live', 'polite');
        
        // Header with user info
        const chatHeader = document.createElement('div');
        chatHeader.className = 'hablaya-chatbot-header';
        chatHeader.innerHTML = `
            <div class="chatbot-header-content">
                <div class="chatbot-avatar" style="background-color: ${chatbotConfig.primaryColor}">HY</div>
                <div>
                    <h3>${chatbotConfig.botName}</h3>
                    <p class="chatbot-status">Online</p>
                </div>
            </div>
            <button id="hablaya-chatbot-close" class="hablaya-chatbot-close" aria-label="Close chat">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Chat body (messages)
        const chatBody = document.createElement('div');
        chatBody.id = 'hablaya-chatbot-messages';
        chatBody.className = 'hablaya-chatbot-messages';
        
        // Footer (options/input)
        const chatFooter = document.createElement('div');
        chatFooter.className = 'hablaya-chatbot-footer';
        
        // Quick action buttons
        const quickActions = document.createElement('div');
        quickActions.className = 'chatbot-quick-actions';
        quickActions.innerHTML = `
            <button class="quick-action" data-next="freeTrial">
                <span>🎓</span> Free Trial
            </button>
            <button class="quick-action" data-next="pricing">
                <span>💰</span> Pricing
            </button>
        `;
        
        // Assemble elements
        chatWindow.appendChild(chatHeader);
        chatWindow.appendChild(chatBody);
        chatWindow.appendChild(quickActions);
        chatWindow.appendChild(chatFooter);
        chatbotContainer.appendChild(chatbotButton);
        chatbotContainer.appendChild(chatWindow);
        
        // Add to document
        document.body.appendChild(chatbotContainer);
        
        // Set dynamic styles
        setChatbotStyles();
        
        // Initialize with welcome message
        showConversationStep('welcome');
        
        // Event listeners
        chatbotButton.addEventListener('click', toggleChatWindow);
        document.getElementById('hablaya-chatbot-close').addEventListener('click', toggleChatWindow);
        
        // Quick action buttons
        document.querySelectorAll('.quick-action').forEach(button => {
            button.addEventListener('click', function() {
                const nextStep = this.getAttribute('data-next');
                showConversationStep(nextStep);
            });
        });
        
        // Listen for auth state changes
        auth.onAuthStateChanged(user => {
            chatbotConfig.user = user;
            if (user) {
                document.querySelector('.chatbot-header-content h3').textContent = `Hi, ${user.displayName || 'there'}!`;
                document.querySelector('.chatbot-status').textContent = 'Premium Member';
            } else {
                document.querySelector('.chatbot-header-content h3').textContent = chatbotConfig.botName;
                document.querySelector('.chatbot-status').textContent = 'Online';
            }
        });
    }

    // Enhanced chatbot styles
    function setChatbotStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .hablaya-chatbot-container {
                position: fixed;
                ${chatbotConfig.position === 'bottom-right' ? 'right: 20px; bottom: 20px;' : 'left: 20px; bottom: 20px;'}
                z-index: 9999;
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            }
            
            .hablaya-chatbot-button {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: ${chatbotConfig.primaryColor};
                color: white;
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(67, 97, 238, 0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                transition: all 0.3s ease;
                position: relative;
            }
            
            .hablaya-chatbot-button:hover {
                background-color: ${chatbotConfig.accentColor};
                transform: scale(1.1);
                box-shadow: 0 6px 25px rgba(247, 37, 133, 0.4);
            }
            
            .chatbot-notification-badge {
                position: absolute;
                top: -5px;
                right: -5px;
                background-color: ${chatbotConfig.accentColor};
                color: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: bold;
            }
            
            .hablaya-chatbot-window {
                width: 380px;
                max-height: 600px;
                background-color: white;
                border-radius: 16px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                display: none;
                flex-direction: column;
                overflow: hidden;
                position: absolute;
                ${chatbotConfig.position === 'bottom-right' ? 'right: 0; bottom: 75px;' : 'left: 0; bottom: 75px;'}
                opacity: 0;
                transform: translateY(10px);
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
            
            .hablaya-chatbot-window.active {
                opacity: 1;
                transform: translateY(0);
            }
            
            .hablaya-chatbot-header {
                padding: 15px 20px;
                background-color: ${chatbotConfig.primaryColor};
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .chatbot-header-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .chatbot-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                color: white;
            }
            
            .hablaya-chatbot-header h3 {
                margin: 0;
                font-size: 16px;
                font-weight: 600;
            }
            
            .chatbot-status {
                margin: 0;
                font-size: 12px;
                opacity: 0.8;
            }
            
            .hablaya-chatbot-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 16px;
                padding: 5px;
                border-radius: 4px;
            }
            
            .hablaya-chatbot-close:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
            
            .hablaya-chatbot-messages {
                padding: 20px;
                flex-grow: 1;
                overflow-y: auto;
                background-color: #f8fafc;
                scroll-behavior: smooth;
            }
            
            .chatbot-message {
                margin-bottom: 15px;
                line-height: 1.6;
                font-size: 14px;
                color: #334155;
            }
            
            .chatbot-message strong {
                color: #1e293b;
            }
            
            .chatbot-message small {
                opacity: 0.7;
            }
            
            .chatbot-message blockquote {
                margin: 10px 0;
                padding: 10px 15px;
                background-color: white;
                border-left: 3px solid ${chatbotConfig.primaryColor};
                border-radius: 0 8px 8px 0;
                font-style: italic;
            }
            
            .chatbot-options {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 15px;
            }
            
            .chatbot-option {
                padding: 12px 15px;
                background-color: white;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                cursor: pointer;
                text-align: left;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 14px;
            }
            
            .chatbot-option:hover {
                background-color: ${chatbotConfig.primaryColor};
                color: white;
                border-color: ${chatbotConfig.primaryColor};
                transform: translateX(3px);
            }
            
            .chatbot-option span {
                font-size: 16px;
            }
            
            .chatbot-form {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin: 15px 0;
            }
            
            .chatbot-form input {
                padding: 12px 15px;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                font-size: 14px;
            }
            
            .chatbot-form button {
                padding: 12px 15px;
                background-color: ${chatbotConfig.primaryColor};
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 500;
                transition: background-color 0.2s ease;
            }
            
            .chatbot-form button:hover {
                background-color: ${chatbotConfig.accentColor};
            }
            
            .chatbot-link {
                color: ${chatbotConfig.primaryColor};
                text-decoration: none;
                font-weight: 500;
            }
            
            .chatbot-link:hover {
                text-decoration: underline;
            }
            
            .loading-spinner {
                width: 24px;
                height: 24px;
                border: 3px solid rgba(67, 97, 238, 0.2);
                border-top-color: ${chatbotConfig.primaryColor};
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 10px auto;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            
            .chatbot-quick-actions {
                display: flex;
                gap: 10px;
                padding: 15px;
                background-color: white;
                border-top: 1px solid #f1f5f9;
            }
            
            .quick-action {
                flex: 1;
                padding: 10px;
                background-color: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                font-size: 12px;
                transition: all 0.2s ease;
            }
            
            .quick-action:hover {
                background-color: ${chatbotConfig.primaryColor};
                color: white;
                border-color: ${chatbotConfig.primaryColor};
            }
            
            .quick-action span {
                font-size: 18px;
            }
            
            .hablaya-chatbot-footer {
                padding: 15px;
                background-color: white;
                border-top: 1px solid #f1f5f9;
            }
            
            @media (max-width: 480px) {
                .hablaya-chatbot-window {
                    width: 90vw;
                    max-height: 70vh;
                    ${chatbotConfig.position === 'bottom-right' ? 'right: 5vw;' : 'left: 5vw;'}
                }
                
                .chatbot-quick-actions {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Toggle chat window with animation
    function toggleChatWindow() {
        const chatWindow = document.getElementById('hablaya-chatbot-window');
        const chatbotContainer = document.getElementById('hablaya-chatbot');
        
        if (chatWindow.style.display === 'flex') {
            chatWindow.classList.remove('active');
            setTimeout(() => {
                chatWindow.style.display = 'none';
            }, 300);
            chatbotContainer.setAttribute('aria-hidden', 'true');
        } else {
            chatWindow.style.display = 'flex';
            setTimeout(() => {
                chatWindow.classList.add('active');
            }, 10);
            chatbotContainer.setAttribute('aria-hidden', 'false');
            document.getElementById('hablaya-chatbot-messages').scrollTop = 
                document.getElementById('hablaya-chatbot-messages').scrollHeight;
            
            // Reset notification badge
            chatbotConfig.unreadMessages = 0;
            updateNotificationBadge();
        }
    }

    // Show conversation step with enhanced features
    function showConversationStep(stepId) {
        const step = conversationFlow[stepId];
        const chatBody = document.getElementById('hablaya-chatbot-messages');
        const chatFooter = document.querySelector('.hablaya-chatbot-footer');
        
        // Clear previous messages
        chatBody.innerHTML = '';
        chatFooter.innerHTML = '';
        
        // Add message
        const messageElement = document.createElement('div');
        messageElement.className = 'chatbot-message';
        messageElement.innerHTML = step.message;
        chatBody.appendChild(messageElement);
        
        // Handle form submissions
        if (stepId === 'signup') {
            document.getElementById('chatbot-signup')?.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = this.querySelector('input[type="text"]').value;
                const email = this.querySelector('input[type="email"]').value;
                const password = this.querySelector('input[type="password"]').value;
                
                auth.createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        return userCredential.user.updateProfile({
                            displayName: name
                        }).then(() => {
                            return db.collection('users').doc(userCredential.user.uid).set({
                                name: name,
                                email: email,
                                englishSessions: 0,
                                spanishSessions: 0,
                                createdAt: firebase.firestore.FieldValue.serverTimestamp()
                            });
                        });
                    })
                    .then(() => {
                        showConversationStep('startPractice');
                    })
                    .catch(error => {
                        const errorElement = document.createElement('div');
                        errorElement.className = 'chatbot-message';
                        errorElement.style.color = chatbotConfig.accentColor;
                        errorElement.textContent = error.message;
                        chatBody.appendChild(errorElement);
                    });
            });
        } else if (stepId === 'login') {
            document.getElementById('chatbot-login')?.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                const password = this.querySelector('input[type="password"]').value;
                
                auth.signInWithEmailAndPassword(email, password)
                    .then(() => {
                        showConversationStep('startPractice');
                    })
                    .catch(error => {
                        const errorElement = document.createElement('div');
                        errorElement.className = 'chatbot-message';
                        errorElement.style.color = chatbotConfig.accentColor;
                        errorElement.textContent = error.message;
                        chatBody.appendChild(errorElement);
                    });
            });
        }
        
        // Add options (handle both static and dynamic options)
        const options = typeof step.options === 'function' ? step.options() : step.options;
        if (options && options.length > 0) {
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'chatbot-options';
            
            options.forEach(option => {
                const optionButton = document.createElement('button');
                optionButton.className = 'chatbot-option';
                optionButton.innerHTML = option.emoji ? `<span>${option.emoji}</span> ${option.text}` : option.text;
                optionButton.addEventListener('click', () => {
                    if (step.action) step.action();
                    showConversationStep(option.next);
                });
                optionButton.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        if (step.action) step.action();
                        showConversationStep(option.next);
                    }
                });
                optionsContainer.appendChild(optionButton);
            });
            
            chatFooter.appendChild(optionsContainer);
        } else if (step.action) {
            step.action();
        }
        
        // Auto-scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Start new practice session (connected to Firebase)
    function startNewSession(language) {
        if (!chatbotConfig.user) {
            showConversationStep('login');
            return;
        }
        
        // Create session record in Firestore
        db.collection('users').doc(chatbotConfig.user.uid).collection('sessions').add({
            language: language,
            startTime: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'active'
        })
        .then(docRef => {
            // Open practice window
            const url = language === 'english' ? 
                'https://hablaya.vercel.app' : 'https://hablayaspanish.vercel.app';
            const newWindow = window.open(url, '_blank');
            
            if (newWindow) {
                // Track if window is closed to mark session as completed
                const checkWindowClosed = setInterval(() => {
                    if (newWindow.closed) {
                        clearInterval(checkWindowClosed);
                        db.collection('users').doc(chatbotConfig.user.uid)
                            .collection('sessions').doc(docRef.id).update({
                                endTime: firebase.firestore.FieldValue.serverTimestamp(),
                                status: 'completed'
                            });
                    }
                }, 1000);
            }
        })
        .catch(error => {
            const chatBody = document.getElementById('hablaya-chatbot-messages');
            const errorElement = document.createElement('div');
            errorElement.className = 'chatbot-message';
            errorElement.style.color = chatbotConfig.accentColor;
            errorElement.textContent = 'Error starting session. Please try again.';
            chatBody.appendChild(errorElement);
        });
    }

    // Update notification badge
    function updateNotificationBadge() {
        const badge = document.getElementById('chatbot-notification');
        if (chatbotConfig.unreadMessages > 0) {
            badge.textContent = chatbotConfig.unreadMessages;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }

    // Initialize the chatbot
    createChatbotElements();

    // Add pulse animation to button after delay
    setTimeout(() => {
        const button = document.getElementById('hablaya-chatbot-button');
        button.style.animation = 'pulse 2s infinite';
        
        // Add notification after 10 seconds
        setTimeout(() => {
            chatbotConfig.unreadMessages = 1;
            updateNotificationBadge();
        }, 10000);
    }, 3000);

    // Make chatbot accessible from console for debugging
    window.HablaYaChatbot = {
        showStep: showConversationStep,
        toggle: toggleChatWindow,
        auth: auth
    };

    console.log('HablaYa Chatbot initialized successfully!');
});
