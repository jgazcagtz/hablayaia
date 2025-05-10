// chatbot.js - AI-Powered Sales & Support Assistant for HablaYa
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced chatbot configuration with bilingual support
    const chatbotConfig = {
        botName: 'HablaYa AI Tutor',
        primaryColor: '#4361ee',
        accentColor: '#f72585',
        position: 'bottom-right',
        greetingMessage: {
            en: '¡Hola! 👋 I\'m your HablaYa AI Tutor. Ready to achieve Spanish fluency through natural conversations? How can I help you today?',
            es: '¡Hola! 👋 Soy tu tutor AI de HablaYa. ¿Listo para lograr fluidez en inglés mediante conversaciones naturales? ¿Cómo puedo ayudarte hoy?'
        },
        currentLanguage: document.documentElement.getAttribute('data-lang') || 'es',
        user: null,
        unreadMessages: 0,
        trialDays: 7
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

    // Bilingual conversation flow with sales-focused approach
    const conversationFlow = {
        welcome: {
            message: {
                en: chatbotConfig.greetingMessage.en,
                es: chatbotConfig.greetingMessage.es
            },
            options: [
                { text: { en: '🚀 How HablaYa works', es: '🚀 Cómo funciona HablaYa' }, next: 'howItWorks', emoji: '🚀' },
                { text: { en: '💰 Pricing plans', es: '💰 Planes de precios' }, next: 'pricing', emoji: '💰' },
                { text: { en: '🎓 Start free trial', es: '🎓 Prueba gratis' }, next: 'freeTrial', emoji: '🎓' },
                { text: { en: '💬 Success stories', es: '💬 Historias de éxito' }, next: 'testimonials', emoji: '💬' }
            ]
        },
        howItWorks: {
            message: {
                en: 'HablaYa revolutionizes language learning with:<br><br>' +
                    '✨ <strong>AI Conversations</strong> - Practice real dialogues with our smart chatbot<br>' +
                    '🎯 <strong>Personalized Learning</strong> - AI adapts to your level and interests<br>' +
                    '📈 <strong>Instant Feedback</strong> - Get corrections on pronunciation and grammar<br>' +
                    '⏱️ <strong>24/7 Availability</strong> - Learn anytime, anywhere<br><br>' +
                    'Our students typically see <strong>2x faster progress</strong> compared to traditional methods!',
                es: 'HablaYa revoluciona el aprendizaje de idiomas con:<br><br>' +
                    '✨ <strong>Conversaciones con IA</strong> - Practica diálogos reales con nuestro chatbot inteligente<br>' +
                    '🎯 <strong>Aprendizaje personalizado</strong> - La IA se adapta a tu nivel e intereses<br>' +
                    '📈 <strong>Retroalimentación instantánea</strong> - Recibe correcciones de pronunciación y gramática<br>' +
                    '⏱️ <strong>Disponibilidad 24/7</strong> - Aprende en cualquier momento y lugar<br><br>' +
                    '¡Nuestros estudiantes típicamente ven un <strong>progreso 2x más rápido</strong> comparado con métodos tradicionales!'
            },
            options: [
                { text: { en: '💰 See plans', es: '💰 Ver planes' }, next: 'pricing', emoji: '💰' },
                { text: { en: '🎓 Start trial', es: '🎓 Iniciar prueba' }, next: 'freeTrial', emoji: '🎓' },
                { text: { en: '🔙 Back', es: '🔙 Regresar' }, next: 'welcome', emoji: '🔙' }
            ]
        },
        pricing: {
            message: {
                en: 'Choose the plan that fits your goals:<br><br>' +
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
                es: 'Elige el plan que se ajuste a tus metas:<br><br>' +
                    '💎 <strong>Plan Anual</strong> - $1,799 MXN/año <small>(ahorra 10%)</small><br>' +
                    '• Solo $150 MXN/mes<br>' +
                    '• <em>¡Mejor valor - más popular!</em><br><br>' +
                    '📅 <strong>Plan Mensual</strong> - $179 MXN/mes<br>' +
                    '• Compromiso flexible<br><br>' +
                    '✅ Ambos incluyen:<br>' +
                    '- Conversaciones ilimitadas con IA<br>' +
                    '- Reconocimiento de voz<br>' +
                    '- Seguimiento de progreso<br>' +
                    '- Garantía de devolución de 30 días'
            },
            options: [
                { text: { en: '💳 Subscribe now', es: '💳 Suscríbete ahora' }, next: 'subscribe', emoji: '💳' },
                { text: { en: '🎓 Try free', es: '🎓 Probar gratis' }, next: 'freeTrial', emoji: '🎓' },
                { text: { en: '💬 Testimonials', es: '💬 Testimonios' }, next: 'testimonials', emoji: '💬' },
                { text: { en: '🔙 Back', es: '🔙 Regresar' }, next: 'welcome', emoji: '🔙' }
            ]
        },
        freeTrial: {
            message: {
                en: '🎉 Get <strong>7 days FREE</strong> access to all HablaYa features!<br><br>' +
                    'No credit card required. Start improving your English today:',
                es: '🎉 Obtén acceso <strong>GRATIS por 7 días</strong> a todas las funciones de HablaYa!<br><br>' +
                    'No se requiere tarjeta de crédito. Empieza a mejorar tu español hoy:'
            },
            options: () => {
                const baseOptions = [
                    { text: { en: '💰 See plans', es: '💰 Ver planes' }, next: 'pricing', emoji: '💰' },
                    { text: { en: '🔙 Back', es: '🔙 Regresar' }, next: 'welcome', emoji: '🔙' }
                ];
                
                if (chatbotConfig.user) {
                    // Check if user already used trial
                    if (chatbotConfig.user.trialUsed) {
                        return [
                            { text: { en: '🚀 Start practicing', es: '🚀 Comenzar a practicar' }, next: 'startPractice', emoji: '🚀' },
                            ...baseOptions
                        ];
                    } else {
                        return [
                            { text: { en: '🎁 Activate trial', es: '🎁 Activar prueba' }, next: 'activateTrial', emoji: '🎁' },
                            ...baseOptions
                        ];
                    }
                } else {
                    return [
                        { text: { en: '👤 Sign up free', es: '👤 Registrarse gratis' }, next: 'signup', emoji: '👤' },
                        { text: { en: '🔐 I have account', es: '🔐 Tengo cuenta' }, next: 'login', emoji: '🔐' },
                        ...baseOptions
                    ];
                }
            }
        },
        activateTrial: {
            message: {
                en: '🎁 Activating your <strong>7-day free trial</strong>...<br><br>' +
                    '<div class="loading-spinner"></div>',
                es: '🎁 Activando tu <strong>prueba gratis de 7 días</strong>...<br><br>' +
                    '<div class="loading-spinner"></div>'
            },
            action: () => {
                // Add trial period to user in Firestore
                const trialEnd = new Date();
                trialEnd.setDate(trialEnd.getDate() + chatbotConfig.trialDays);
                
                db.collection('users').doc(chatbotConfig.user.uid).update({
                    trialActive: true,
                    trialEnd: firebase.firestore.Timestamp.fromDate(trialEnd),
                    trialUsed: true
                })
                .then(() => {
                    showConversationStep('trialActivated');
                })
                .catch(error => {
                    showError({
                        en: 'Failed to activate trial. Please try again.',
                        es: 'Error al activar la prueba. Por favor intenta de nuevo.'
                    });
                });
            }
        },
        trialActivated: {
            message: {
                en: '🎉 Your <strong>7-day free trial</strong> is activated!<br><br>' +
                    'You now have full access to all HablaYa features until <strong>{trialEnd}</strong>.' +
                    'Start practicing right away!',
                es: '🎉 ¡Tu <strong>prueba gratis de 7 días</strong> está activada!<br><br>' +
                    'Ahora tienes acceso completo a todas las funciones de HablaYa hasta el <strong>{trialEnd}</strong>.' +
                    '¡Empieza a practicar ahora mismo!'
            },
            options: [
                { text: { en: '🚀 Start practicing', es: '🚀 Comenzar a practicar' }, next: 'startPractice', emoji: '🚀' },
                { text: { en: '💰 See plans', es: '💰 Ver planes' }, next: 'pricing', emoji: '💰' }
            ]
        },
        subscribe: {
            message: {
                en: '🚀 Ready to become fluent? Choose your subscription:<br><br>' +
                    '1. <strong>Annual Plan</strong> - $1,799 MXN/year (save 10%)<br>' +
                    '2. <strong>Monthly Plan</strong> - $179 MXN/month',
                es: '🚀 ¿Listo para ser fluido? Elige tu suscripción:<br><br>' +
                    '1. <strong>Plan Anual</strong> - $1,799 MXN/año (ahorra 10%)<br>' +
                    '2. <strong>Plan Mensual</strong> - $179 MXN/mes'
            },
            options: [
                { text: { en: '💳 Annual ($1,799)', es: '💳 Anual ($1,799)' }, next: 'processPaymentAnnual', emoji: '💳' },
                { text: { en: '💳 Monthly ($179)', es: '💳 Mensual ($179)' }, next: 'processPaymentMonthly', emoji: '💳' },
                { text: { en: '🔙 Back', es: '🔙 Regresar' }, next: 'pricing', emoji: '🔙' }
            ]
        },
        processPaymentAnnual: {
            message: {
                en: '🔒 Redirecting to secure payment for <strong>Annual Plan</strong>...<br><br>' +
                    '<div class="loading-spinner"></div>',
                es: '🔒 Redirigiendo a pago seguro para <strong>Plan Anual</strong>...<br><br>' +
                    '<div class="loading-spinner"></div>'
            },
            action: () => {
                setTimeout(() => {
                    // Create PayPal form dynamically
                    const form = document.createElement('form');
                    form.action = 'https://www.paypal.com/cgi-bin/webscr';
                    form.method = 'post';
                    form.target = '_blank';
                    
                    const params = {
                        cmd: '_xclick',
                        business: 'gascagtz@gmail.com',
                        lc: chatbotConfig.currentLanguage === 'es' ? 'MX' : 'US',
                        item_name: chatbotConfig.currentLanguage === 'es' 
                            ? 'Suscripción Anual HablaYa!' 
                            : 'HablaYa! Annual Subscription',
                        amount: '1799.00',
                        currency_code: 'MXN',
                        button_subtype: 'services',
                        no_note: '0',
                        bn: 'PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest'
                    };
                    
                    for (const key in params) {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = key;
                        input.value = params[key];
                        form.appendChild(input);
                    }
                    
                    document.body.appendChild(form);
                    form.submit();
                    document.body.removeChild(form);
                    
                    showConversationStep('paymentComplete');
                }, 1500);
            }
        },
        processPaymentMonthly: {
            message: {
                en: '🔒 Redirecting to secure payment for <strong>Monthly Plan</strong>...<br><br>' +
                    '<div class="loading-spinner"></div>',
                es: '🔒 Redirigiendo a pago seguro para <strong>Plan Mensual</strong>...<br><br>' +
                    '<div class="loading-spinner"></div>'
            },
            action: () => {
                setTimeout(() => {
                    // Create PayPal form dynamically
                    const form = document.createElement('form');
                    form.action = 'https://www.paypal.com/cgi-bin/webscr';
                    form.method = 'post';
                    form.target = '_blank';
                    
                    const params = {
                        cmd: '_xclick-subscriptions',
                        business: 'gascagtz@gmail.com',
                        lc: chatbotConfig.currentLanguage === 'es' ? 'MX' : 'US',
                        item_name: chatbotConfig.currentLanguage === 'es' 
                            ? 'Suscripción Mensual HablaYa!' 
                            : 'HablaYa! Monthly Subscription',
                        a3: '179.00',
                        p3: '1',
                        t3: 'M',
                        src: '1',
                        currency_code: 'MXN'
                    };
                    
                    for (const key in params) {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = key;
                        input.value = params[key];
                        form.appendChild(input);
                    }
                    
                    document.body.appendChild(form);
                    form.submit();
                    document.body.removeChild(form);
                    
                    showConversationStep('paymentComplete');
                }, 1500);
            }
        },
        paymentComplete: {
            message: {
                en: '🎉 Subscription successful!<br><br>' +
                    'You now have full access to HablaYa. Start practicing immediately!',
                es: '🎉 ¡Suscripción exitosa!<br><br>' +
                    'Ahora tienes acceso completo a HablaYa. ¡Empieza a practicar inmediatamente!'
            },
            options: [
                { text: { en: '🚀 Start practicing', es: '🚀 Comenzar a practicar' }, next: 'startPractice', emoji: '🚀' },
                { text: { en: '🏠 Back to menu', es: '🏠 Volver al menú' }, next: 'welcome', emoji: '🏠' }
            ]
        },
        signup: {
            message: {
                en: 'Create your free account:<br><br>' +
                    '<form id="chatbot-signup" class="chatbot-form">' +
                    '<input type="text" placeholder="Your name" required>' +
                    '<input type="email" placeholder="Email" required>' +
                    '<input type="password" placeholder="Password (min 6 chars)" minlength="6" required>' +
                    '<button type="submit">Create Account</button>' +
                    '</form>',
                es: 'Crea tu cuenta gratuita:<br><br>' +
                    '<form id="chatbot-signup" class="chatbot-form">' +
                    '<input type="text" placeholder="Tu nombre" required>' +
                    '<input type="email" placeholder="Correo electrónico" required>' +
                    '<input type="password" placeholder="Contraseña (mín 6 caracteres)" minlength="6" required>' +
                    '<button type="submit">Crear cuenta</button>' +
                    '</form>'
            },
            options: [
                { text: { en: '🔐 Have account? Log in', es: '🔐 ¿Tienes cuenta? Inicia sesión' }, next: 'login', emoji: '🔐' },
                { text: { en: '🔙 Back', es: '🔙 Regresar' }, next: 'freeTrial', emoji: '🔙' }
            ]
        },
        login: {
            message: {
                en: 'Log in to your account:<br><br>' +
                    '<form id="chatbot-login" class="chatbot-form">' +
                    '<input type="email" placeholder="Email" required>' +
                    '<input type="password" placeholder="Password" required>' +
                    '<button type="submit">Log In</button>' +
                    '</form>',
                es: 'Inicia sesión en tu cuenta:<br><br>' +
                    '<form id="chatbot-login" class="chatbot-form">' +
                    '<input type="email" placeholder="Correo electrónico" required>' +
                    '<input type="password" placeholder="Contraseña" required>' +
                    '<button type="submit">Iniciar sesión</button>' +
                    '</form>'
            },
            options: [
                { text: { en: '👤 Need account? Sign up', es: '👤 ¿Necesitas cuenta? Regístrate' }, next: 'signup', emoji: '👤' },
                { text: { en: '🔙 Back', es: '🔙 Regresar' }, next: 'freeTrial', emoji: '🔙' }
            ]
        },
        startPractice: {
            message: {
                en: 'Choose your practice mode:',
                es: 'Elige tu modo de práctica:'
            },
            options: [
                { text: { en: '🇬🇧 Practice English', es: '🇬🇧 Practicar inglés' }, next: 'startEnglish', emoji: '🇬🇧' },
                { text: { en: '🇪🇸 Practice Spanish', es: '🇪🇸 Practicar español' }, next: 'startSpanish', emoji: '🇪🇸' },
                { text: { en: '🔙 Back', es: '🔙 Regresar' }, next: 'welcome', emoji: '🔙' }
            ]
        },
        startEnglish: {
            message: {
                en: 'Opening English practice session...<br><br>' +
                    '<div class="loading-spinner"></div>',
                es: 'Abriendo sesión de práctica de inglés...<br><br>' +
                    '<div class="loading-spinner"></div>'
            },
            action: () => {
                startNewSession('english');
            }
        },
        startSpanish: {
            message: {
                en: 'Opening Spanish practice session...<br><br>' +
                    '<div class="loading-spinner"></div>',
                es: 'Abriendo sesión de práctica de español...<br><br>' +
                    '<div class="loading-spinner"></div>'
            },
            action: () => {
                startNewSession('spanish');
            }
        },
        testimonials: {
            message: {
                en: 'Here\'s what our students say:<br><br>' +
                    '⭐️⭐️⭐️⭐️⭐️<blockquote>"I went from basic to fluent conversations in 3 months! The AI adapts perfectly to my level." - Carlos M.</blockquote>' +
                    '⭐️⭐️⭐️⭐️⭐️<blockquote>"The pronunciation feedback changed everything. My coworkers noticed my improvement immediately!" - Ana L.</blockquote>' +
                    '⭐️⭐️⭐️⭐️⭐️<blockquote>"As a busy professional, I love practicing during my commute. The AI remembers my progress!" - Diego R.</blockquote>',
                es: 'Esto es lo que dicen nuestros estudiantes:<br><br>' +
                    '⭐️⭐️⭐️⭐️⭐️<blockquote>"¡Pasé de conversaciones básicas a fluidas en 3 meses! La IA se adapta perfectamente a mi nivel." - Carlos M.</blockquote>' +
                    '⭐️⭐️⭐️⭐️⭐️<blockquote>"¡La retroalimentación de pronunciación cambió todo! Mis compañeros notaron mi mejora inmediatamente." - Ana L.</blockquote>' +
                    '⭐️⭐️⭐️⭐️⭐️<blockquote>"Como profesional ocupado, me encanta practicar durante mi trayecto. ¡La IA recuerda mi progreso!" - Diego R.</blockquote>'
            },
            options: [
                { text: { en: '🎓 Start trial', es: '🎓 Iniciar prueba' }, next: 'freeTrial', emoji: '🎓' },
                { text: { en: '💰 See pricing', es: '💰 Ver precios' }, next: 'pricing', emoji: '💰' },
                { text: { en: '🔙 Back', es: '🔙 Regresar' }, next: 'welcome', emoji: '🔙' }
            ]
        }
    };

    // Create chatbot elements with enhanced UI and mobile responsiveness
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
                <span>🎓</span> <span class="quick-action-text">${chatbotConfig.currentLanguage === 'es' ? 'Prueba Gratis' : 'Free Trial'}</span>
            </button>
            <button class="quick-action" data-next="pricing">
                <span>💰</span> <span class="quick-action-text">${chatbotConfig.currentLanguage === 'es' ? 'Precios' : 'Pricing'}</span>
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
            if (user) {
                // User is signed in
                chatbotConfig.user = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                };
                
                // Get additional user data from Firestore
                db.collection('users').doc(user.uid).get()
                    .then(doc => {
                        if (doc.exists) {
                            chatbotConfig.user = {
                                ...chatbotConfig.user,
                                ...doc.data()
                            };
                        }
                        
                        updateUserUI();
                    });
            } else {
                // User is signed out
                chatbotConfig.user = null;
                updateUserUI();
            }
        });
    }

    // Update UI based on user state
    function updateUserUI() {
        const headerTitle = document.querySelector('.chatbot-header-content h3');
        const statusElement = document.querySelector('.chatbot-status');
        
        if (chatbotConfig.user) {
            headerTitle.textContent = chatbotConfig.currentLanguage === 'es' 
                ? `¡Hola, ${chatbotConfig.user.displayName || 'amigo'}!` 
                : `Hi, ${chatbotConfig.user.displayName || 'there'}!`;
            
            if (chatbotConfig.user.trialActive) {
                const trialEnd = chatbotConfig.user.trialEnd.toDate();
                statusElement.textContent = chatbotConfig.currentLanguage === 'es'
                    ? `Prueba hasta ${trialEnd.toLocaleDateString()}`
                    : `Trial ends ${trialEnd.toLocaleDateString()}`;
            } else if (chatbotConfig.user.subscriptionActive) {
                statusElement.textContent = chatbotConfig.currentLanguage === 'es'
                    ? 'Miembro Premium'
                    : 'Premium Member';
            } else {
                statusElement.textContent = chatbotConfig.currentLanguage === 'es'
                    ? 'Cuenta Gratuita'
                    : 'Free Account';
            }
        } else {
            headerTitle.textContent = chatbotConfig.botName;
            statusElement.textContent = 'Online';
        }
    }

    // Enhanced chatbot styles with responsive design
    function setChatbotStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Base Styles */
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
                max-height: 80vh;
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
                max-height: calc(80vh - 200px);
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
                padding: 0 15px 15px;
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
                width: 100%;
                box-sizing: border-box;
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
                width: 100%;
                box-sizing: border-box;
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
                width: 100%;
            }
            
            .chatbot-form button:hover {
                background-color: ${chatbotConfig.accentColor};
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
                min-width: 0;
            }
            
            .quick-action:hover {
                background-color: ${chatbotConfig.primaryColor};
                color: white;
                border-color: ${chatbotConfig.primaryColor};
            }
            
            .quick-action span {
                font-size: 18px;
            }
            
            .quick-action-text {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
                text-align: center;
            }
            
            .hablaya-chatbot-footer {
                padding: 0;
                background-color: white;
                border-top: 1px solid #f1f5f9;
            }
            
            /* Responsive Styles */
            @media (max-width: 768px) {
                .hablaya-chatbot-container {
                    ${chatbotConfig.position === 'bottom-right' ? 'right: 10px;' : 'left: 10px;'}
                    bottom: 10px;
                }
                
                .hablaya-chatbot-window {
                    width: calc(100vw - 20px);
                    max-width: 380px;
                    ${chatbotConfig.position === 'bottom-right' ? 'right: 0;' : 'left: 0;'}
                    bottom: 70px;
                    max-height: 70vh;
                }
                
                .hablaya-chatbot-messages {
                    max-height: calc(70vh - 200px);
                }
                
                .chatbot-quick-actions {
                    flex-wrap: wrap;
                }
                
                .quick-action {
                    min-width: calc(50% - 5px);
                }
            }
            
            @media (max-width: 480px) {
                .hablaya-chatbot-button {
                    width: 50px;
                    height: 50px;
                    font-size: 20px;
                }
                
                .hablaya-chatbot-window {
                    border-radius: 12px 12px 0 0;
                    bottom: 0;
                    max-height: 80vh;
                }
                
                .hablaya-chatbot-messages {
                    max-height: calc(80vh - 200px);
                    padding: 15px;
                }
                
                .chatbot-message {
                    font-size: 13px;
                }
                
                .chatbot-option {
                    padding: 10px 12px;
                    font-size: 13px;
                }
                
                .chatbot-form input,
                .chatbot-form button {
                    padding: 10px 12px;
                    font-size: 13px;
                }
                
                .quick-action-text {
                    font-size: 11px;
                }
            }
            
            /* Mobile bottom sheet effect */
            @media (max-width: 480px) {
                .hablaya-chatbot-window {
                    transform: translateY(100%);
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }
                
                .hablaya-chatbot-window.active {
                    transform: translateY(0);
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
        if (!step) return;
        
        const chatBody = document.getElementById('hablaya-chatbot-messages');
        const chatFooter = document.querySelector('.hablaya-chatbot-footer');
        
        // Clear previous messages
        chatBody.innerHTML = '';
        chatFooter.innerHTML = '';
        
        // Format message with dynamic data
        let message = step.message[chatbotConfig.currentLanguage] || step.message.en;
        if (stepId === 'trialActivated' && chatbotConfig.user?.trialEnd) {
            const trialEnd = chatbotConfig.user.trialEnd.toDate();
            message = message.replace('{trialEnd}', trialEnd.toLocaleDateString());
        }
        
        // Add message
        const messageElement = document.createElement('div');
        messageElement.className = 'chatbot-message';
        messageElement.innerHTML = message;
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
                                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                            });
                        });
                    })
                    .then(() => {
                        showConversationStep('freeTrial');
                    })
                    .catch(error => {
                        showError({
                            en: error.message,
                            es: 'Error al crear la cuenta. Por favor intenta de nuevo.'
                        });
                    });
            });
        } else if (stepId === 'login') {
            document.getElementById('chatbot-login')?.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                const password = this.querySelector('input[type="password"]').value;
                
                auth.signInWithEmailAndPassword(email, password)
                    .then(() => {
                        showConversationStep('freeTrial');
                    })
                    .catch(error => {
                        showError({
                            en: error.message,
                            es: 'Error al iniciar sesión. Verifica tus credenciales.'
                        });
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
                const optionText = option.text[chatbotConfig.currentLanguage] || option.text.en;
                optionButton.innerHTML = option.emoji ? `<span>${option.emoji}</span> ${optionText}` : optionText;
                optionButton.addEventListener('click', () => {
                    if (step.action) step.action();
                    showConversationStep(option.next);
                });
                optionsContainer.appendChild(optionButton);
            });
            
            chatFooter.appendChild(optionsContainer);
        } else if (step.action) {
            step.action();
        }
        
        // Auto-scroll to bottom
        setTimeout(() => {
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 100);
    }

    // Show error message in chat
    function showError(message) {
        const chatBody = document.getElementById('hablaya-chatbot-messages');
        const errorElement = document.createElement('div');
        errorElement.className = 'chatbot-message';
        errorElement.style.color = chatbotConfig.accentColor;
        errorElement.textContent = message[chatbotConfig.currentLanguage] || message.en || 'An error occurred';
        chatBody.appendChild(errorElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Start new practice session (connected to Firebase)
    function startNewSession(language) {
        if (!chatbotConfig.user) {
            showConversationStep('login');
            return;
        }
        
        // Check if user has access
        if (!chatbotConfig.user.subscriptionActive && 
            (!chatbotConfig.user.trialActive || new Date() > chatbotConfig.user.trialEnd.toDate())) {
            showConversationStep('subscribe');
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
            showError({
                en: 'Error starting session. Please try again.',
                es: 'Error al iniciar la sesión. Por favor intenta de nuevo.'
            });
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
            if (!document.getElementById('hablaya-chatbot-window').classList.contains('active')) {
                chatbotConfig.unreadMessages = 1;
                updateNotificationBadge();
            }
        }, 10000);
    }, 3000);

    // Make chatbot accessible from console for debugging
    window.HablaYaChatbot = {
        showStep: showConversationStep,
        toggle: toggleChatWindow,
        auth: auth,
        setLanguage: function(lang) {
            chatbotConfig.currentLanguage = lang;
            showConversationStep('welcome');
        }
    };

    console.log('HablaYa Chatbot initialized successfully!');
});
