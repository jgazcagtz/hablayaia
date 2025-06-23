// Global variables
let auth;
let db;

// Enhanced Language translations with Portuguese support
const translations = {
    es: {
        // Promotional banner
        promoMessage: "¡OFERTA ESPECIAL! 50% de descuento por 90 días - ¡Precios introductorios limitados!",
        languageLabel: "Idioma:",
        currencyLabel: "Moneda:",
        
        // Intro page
        introTitle: "Domina idiomas conversando con IA",
        introSubtitle: "Practica inglés, español, portugués, francés e italiano 24/7 con nuestro chatbot inteligente",
        introFeature1: "IA Adaptativa",
        introFeature2: "24/7 Disponible", 
        introFeature3: "Reconocimiento de Voz",
        introChat1: "¡Hola! ¿Cómo estás hoy?",
        introChat2: "¡Muy bien! Quiero practicar inglés",
        introChat3: "¡Perfecto! Empecemos con una conversación básica...",
        introStartBtn: "Comenzar Ahora",
        introNote: "Prueba gratis de 7 días • Sin tarjeta de crédito",
        settingsTitle: "Configuración",
        
        // Instructions
        instructionsTitle: "Cómo Comprar y Acceder",
        instructionsSubtitle: "Sigue estos pasos simples para comenzar tu viaje de aprendizaje",
        step1Title: "1. Prueba Gratis",
        step1Desc: "Regístrate gratis y obtén 7 días de acceso completo sin tarjeta de crédito",
        step2Title: "2. Elige tu Plan",
        step2Desc: "Selecciona el plan que mejor se ajuste a tus metas de aprendizaje",
        step3Title: "3. Paga Seguro",
        step3Desc: "Usa PayPal para un pago seguro y protegido",
        step4Title: "4. Comienza a Aprender",
        step4Desc: "Accede inmediatamente a todas las funciones y comienza a practicar",
        
        heroTitle: "Fluidez al Alcance de tu Mano",
        heroSubtitle: "Domina inglés, español, portugués, francés o italiano conversando de forma natural con nuestro avanzado chatbot de IA",
        getAccess: "Comenzar Ahora",
        tryNow: "Probar Ahora",
        features: "Características",
        pricing: "Precios",
        testimonials: "Testimonios",
        toggleLang: "Cambiar a Inglés",
        demoTitle: "Habla con HablaYa!",
        demoSubtitle: "Prueba nuestro chatbot de IA en todos los idiomas",
        englishVersion: "Versión en Inglés",
        englishDesc: "Practica tu inglés con nuestro tutor de IA",
        tryEnglish: "Probar Inglés",
        spanishVersion: "Versión en Español",
        spanishDesc: "Practica tu español con nuestro tutor de IA",
        trySpanish: "Probar Spanish Version",
        portugueseVersion: "Versión en Portugués",
        portugueseDesc: "Practica tu portugués con nuestro tutor de IA",
        tryPortuguese: "Probar Portuguese Version",
        featuresSubtitle: "POR QUÉ HABLAYA",
        featuresTitle: "Tu Asistente de Idiomas con IA",
        feature1Title: "IA Inteligente",
        feature1Desc: "IA adaptativa que aprende tu nivel y personaliza conversaciones",
        feature2Title: "Diálogos Reales",
        feature2Desc: "Practica conversaciones prácticas que realmente usarás",
        feature3Title: "Siempre Disponible",
        feature3Desc: "Practica cuando te inspire, de día o de noche",
        feature4Title: "Retroalimentación Instantánea",
        feature4Desc: "Correcciones en tiempo real de pronunciación y gramática",
        pricingSubtitle: "PLANES ACCESIBLES",
        pricingTitle: "Precios Sencillos, Máximo Valor",
        pricingDescription: "Comienza con una prueba gratis de 7 días, luego elige el plan que se ajuste a tus metas",
        freeTrial: "Prueba Gratis",
        freeTrialPlan: "Prueba Gratis de 7 Días",
        freeTrialSubtitle: "7 días gratis • Sin tarjeta de crédito",
        startFreeTrial: "Comenzar Prueba Gratis",
        trialNote: "Cancela en cualquier momento durante la prueba",
        annualPlan: "Plan Anual",
        monthlyPlan: "Plan Mensual",
        perYear: "por año",
        perMonth: "por mes",
        save10: "Ahorra 10%",
        priceFeature1: "Conversaciones ilimitadas",
        priceFeature2: "Respuestas de IA avanzada",
        priceFeature3: "Reconocimiento de Voz y Texto",
        priceFeature4: "Soporte prioritario",
        priceFeature5: "Practica donde sea, cuando quieras",
        priceFeature6: "Analíticas avanzadas",
        buyNow: "Obtener",
        moneyBack: "Garantía de devolución de 30 días",
        testimonialsSubtitle: "HISTORIAS DE ÉXITO",
        testimonialsTitle: "¡Los Estudiantes Aman HablaYa!",
        testimonial1: "¡Pasé de básico a conversaciones fluidas en solo 3 meses! La IA se adapta perfectamente a tu nivel.",
        testimonial2: "Finalmente una forma accesible de practicar diariamente. La retroalimentación sobre mi pronunciación cambió todo.",
        testimonial3: "Como profesional ocupado, me encanta poder practicar durante mi commute. ¡La IA recuerda mi progreso!",
        finalCtaTitle: "¿Listo para Transformar tus Habilidades Lingüísticas?",
        finalCtaSubtitle: "Únete a 10,000+ estudiantes que lograron fluidez con HablaYa!",
        quickLinks: "Enlaces Rápidos",
        company: "Empresa",
        aboutUs: "Nosotros",
        privacy: "Privacidad",
        terms: "Términos",
        footerAbout: "Dominio de idiomas con IA por LearnWG",
        copyright: "© 2025 Learn WG. Todos los derechos reservados.",
        aboutTitle: "Sobre LearnWG",
        aboutText: "LearnWG es una compañía de tecnología educativa que crea soluciones innovadoras para el aprendizaje de idiomas potenciadas por inteligencia artificial.",
        privacyTitle: "Política de Privacidad",
        privacyText: "Respetamos tu privacidad. Tus datos se cifran y usan solo para mejorar tu experiencia. Nunca vendemos o compartimos tu información sin consentimiento explícito.",
        termsTitle: "Términos de Servicio",
        termsText: "Al acceder a HablaYa!, aceptas nuestros términos. Las suscripciones se renuevan automáticamente pero pueden cancelarse cuando quieras. Ofrecemos garantía de devolución de 30 días si no estás satisfecho.",
        locationMexico: "Ciudad de México",
        locationGuadalajara: "Guadalajara",
        locationMonterrey: "Monterrey",
        locationBrazil: "São Paulo",
        popularChoice: "Más Popular",
        liveChat: "Chat en Vivo",
        loginTitle: "Iniciar Sesión",
        emailLabel: "Correo Electrónico",
        passwordLabel: "Contraseña",
        loginButton: "Iniciar Sesión",
        noAccount: "¿No tienes cuenta?",
        signupTitle: "Crear Cuenta",
        nameLabel: "Nombre",
        signupButton: "Registrarse",
        haveAccount: "¿Ya tienes cuenta?",
        dashboardTitle: "Tu Panel de Aprendizaje",
        englishSessions: "Sesiones en Inglés",
        spanishSessions: "Sesiones en Español",
        portugueseSessions: "Sesiones en Portugués",
        totalSessions: "Sesiones Totales",
        currentLevel: "Nivel Actual",
        subscription: "Suscripción",
        trialStatus: "Estado de Prueba",
        startSession: "Iniciar Nueva Sesión",
        logoutButton: "Cerrar Sesión",
        startChatbot: "Iniciar Tutor de Idiomas",
        paymentManagement: "Gestión de Pagos",
        currentPlan: "Plan Actual",
        billingHistory: "Historial de Facturación",
        upgradePlan: "Actualizar Plan",
        manageSubscription: "Gestionar",
        viewAllTransactions: "Ver Todas",
        trialExpired: "Prueba Expirada",
        trialActive: "Prueba Activa",
        daysLeft: "días restantes",
        upgradeNow: "Actualizar Ahora"
    },
    en: {
        // Promotional banner
        promoMessage: "SPECIAL OFFER! 50% discount for 90 days - Limited introductory pricing!",
        languageLabel: "Language:",
        currencyLabel: "Currency:",
        
        // Intro page
        introTitle: "Master languages by conversing with AI",
        introSubtitle: "Practice English, Spanish, Portuguese, French, or Italian 24/7 with our intelligent chatbot",
        introFeature1: "Adaptive AI",
        introFeature2: "Always Available", 
        introFeature3: "Speech Recognition",
        introChat1: "Hi! How are you today?",
        introChat2: "Great! I want to practice English",
        introChat3: "Perfect! Let's start with a basic conversation...",
        introStartBtn: "Get Started",
        introNote: "7-day free trial • No credit card required",
        settingsTitle: "Settings",
        
        // Instructions
        instructionsTitle: "How to Buy and Access",
        instructionsSubtitle: "Follow these simple steps to start your learning journey",
        step1Title: "1. Free Trial",
        step1Desc: "Sign up for free and get 7 days of full access without credit card",
        step2Title: "2. Choose Your Plan",
        step2Desc: "Select the plan that best fits your learning goals",
        step3Title: "3. Secure Payment",
        step3Desc: "Use PayPal for secure and protected payment",
        step4Title: "4. Start Learning",
        step4Desc: "Get immediate access to all features and start practicing",
        
        heroTitle: "Fluency at Your Fingertips",
        heroSubtitle: "Master English, Spanish, Portuguese, French, or Italian by conversing naturally with our advanced AI chatbot",
        getAccess: "Get Started",
        tryNow: "Try Now",
        features: "Features",
        pricing: "Pricing",
        testimonials: "Testimonials",
        toggleLang: "Switch to Spanish",
        demoTitle: "Speak with HablaYa!",
        demoSubtitle: "Try our AI chatbot in all languages",
        englishVersion: "English Version",
        englishDesc: "Practice your English with our AI tutor",
        tryEnglish: "Try English Version",
        spanishVersion: "Spanish Version",
        spanishDesc: "Practice your Spanish with our AI tutor",
        trySpanish: "Try Spanish Version",
        portugueseVersion: "Portuguese Version",
        portugueseDesc: "Practice your Portuguese with our AI tutor",
        tryPortuguese: "Try Portuguese Version",
        featuresSubtitle: "WHY HABLAYA",
        featuresTitle: "Your Personal AI Language Partner",
        feature1Title: "Smart AI Tutor",
        feature1Desc: "Adaptive AI that learns your level and personalizes conversations",
        feature2Title: "Real Dialogues",
        feature2Desc: "Practice practical conversations you'll actually use",
        feature3Title: "Always Available",
        feature3Desc: "Practice whenever inspiration strikes, day or night",
        feature4Title: "Instant Feedback",
        feature4Desc: "Real-time corrections on pronunciation and grammar",
        pricingSubtitle: "AFFORDABLE PLANS",
        pricingTitle: "Simple Pricing, Maximum Value",
        pricingDescription: "Start with a 7-day free trial, then choose the plan that fits your goals",
        freeTrial: "Free Trial",
        freeTrialPlan: "7-Day Free Trial",
        freeTrialSubtitle: "7 days free • No credit card required",
        startFreeTrial: "Start Free Trial",
        trialNote: "Cancel anytime during trial",
        annualPlan: "Annual Plan",
        monthlyPlan: "Monthly Plan",
        perYear: "per year",
        perMonth: "per month",
        save10: "Save 10%",
        priceFeature1: "Unlimited conversations",
        priceFeature2: "Advanced AI responses",
        priceFeature3: "Speech Recognition Technology",
        priceFeature4: "Priority support",
        priceFeature5: "Practice anytime, anywhere",
        priceFeature6: "Advanced analytics",
        buyNow: "Get",
        moneyBack: "30-day money back guarantee",
        testimonialsSubtitle: "SUCCESS STORIES",
        testimonialsTitle: "Students Love HablaYa!",
        testimonial1: "I went from basic to fluent conversations in just 3 months! The AI adapts perfectly to your level.",
        testimonial2: "Finally an affordable way to practice daily. The feedback on my pronunciation was a game-changer.",
        testimonial3: "As a busy professional, I love being able to practice during my commute. The AI remembers my progress!",
        finalCtaTitle: "Ready to Transform Your Language Skills?",
        finalCtaSubtitle: "Join 10,000+ students who achieved fluency with HablaYa!",
        quickLinks: "Quick Links",
        company: "Company",
        aboutUs: "About Us",
        privacy: "Privacy",
        terms: "Terms",
        footerAbout: "AI-powered language mastery by LearnWG",
        copyright: "© 2025 Learn WG. All rights reserved.",
        aboutTitle: "About LearnWG",
        aboutText: "LearnWG is an innovative edtech company creating AI-powered language learning solutions that make mastering new languages accessible, effective, and enjoyable for everyone.",
        privacyTitle: "Privacy Policy",
        privacyText: "We prioritize your privacy. Your data is encrypted and used solely to enhance your learning experience. We never sell or share your information with third parties without explicit consent.",
        termsTitle: "Terms of Service",
        termsText: "By accessing HablaYa!, you agree to our terms. Subscriptions auto-renew but can be canceled anytime. We offer a 30-day money-back guarantee if you're not satisfied.",
        locationMexico: "Mexico City",
        locationGuadalajara: "Guadalajara",
        locationMonterrey: "Monterrey",
        locationBrazil: "São Paulo",
        popularChoice: "Most Popular",
        liveChat: "Live Conversation",
        loginTitle: "Log In",
        emailLabel: "Email",
        passwordLabel: "Password",
        loginButton: "Log In",
        noAccount: "Don't have an account?",
        signupTitle: "Create Account",
        nameLabel: "Name",
        signupButton: "Sign Up",
        haveAccount: "Already have an account?",
        dashboardTitle: "Your Learning Dashboard",
        englishSessions: "English Sessions",
        spanishSessions: "Spanish Sessions",
        portugueseSessions: "Portuguese Sessions",
        totalSessions: "Total Sessions",
        currentLevel: "Current Level",
        subscription: "Subscription",
        trialStatus: "Trial Status",
        startSession: "Start New Session",
        logoutButton: "Log Out",
        startChatbot: "Start Language Tutor",
        paymentManagement: "Payment Management",
        currentPlan: "Current Plan",
        billingHistory: "Billing History",
        upgradePlan: "Upgrade Plan",
        manageSubscription: "Manage",
        viewAllTransactions: "View All",
        trialExpired: "Trial Expired",
        trialActive: "Trial Active",
        daysLeft: "days left",
        upgradeNow: "Upgrade Now"
    },
    pt: {
        // Promotional banner
        promoMessage: "OFERTA ESPECIAL! 50% de desconto por 90 dias - Preços introdutórios limitados!",
        languageLabel: "Idioma:",
        currencyLabel: "Moeda:",
        
        // Intro page
        introTitle: "Domine idiomas conversando com IA",
        introSubtitle: "Pratique inglês, espanhol, português, francês ou italiano 24/7 com nosso chatbot inteligente",
        introFeature1: "IA Adaptativa",
        introFeature2: "24/7 Disponível", 
        introFeature3: "Reconhecimento de Voz",
        introChat1: "Olá! Como você está hoje?",
        introChat2: "Muito bem! Eu quero praticar inglês",
        introChat3: "Perfeito! Vamos começar com uma conversação básica...",
        introStartBtn: "Começar Agora",
        introNote: "Teste grátis de 7 dias • Sem cartão de crédito",
        settingsTitle: "Configurações",
        
        // Instructions
        instructionsTitle: "Como Comprar e Acessar",
        instructionsSubtitle: "Siga estes passos simples para começar sua jornada de aprendizado",
        step1Title: "1. Teste Grátis",
        step1Desc: "Cadastre-se gratuitamente e obtenha 7 dias de acesso completo sem cartão de crédito",
        step2Title: "2. Escolha seu Plano",
        step2Desc: "Selecione o plano que melhor atende aos seus objetivos de aprendizado",
        step3Title: "3. Pagamento Seguro",
        step3Desc: "Use PayPal para pagamento seguro e protegido",
        step4Title: "4. Comece a Aprender",
        step4Desc: "Obtenha acesso imediato a todos os recursos e comece a praticar",
        
        heroTitle: "Fluência ao Alcance das suas Mãos",
        heroSubtitle: "Domine inglês, espanhol, português, francês ou italiano conversando naturalmente com nosso chatbot de IA avançado",
        getAccess: "Começar Agora",
        tryNow: "Experimentar Agora",
        features: "Recursos",
        pricing: "Preços",
        testimonials: "Depoimentos",
        toggleLang: "Mudar para Espanhol",
        demoTitle: "Fale com HablaYa!",
        demoSubtitle: "Experimente nosso chatbot de IA em todos os idiomas",
        englishVersion: "Versão em Inglês",
        englishDesc: "Pratique seu inglês com nosso tutor de IA",
        tryEnglish: "Experimentar Inglês",
        spanishVersion: "Versão em Espanhol",
        spanishDesc: "Pratique seu espanhol com nosso tutor de IA",
        trySpanish: "Experimentar Espanhol",
        portugueseVersion: "Versão em Português",
        portugueseDesc: "Pratique seu português com nosso tutor de IA",
        tryPortuguese: "Experimentar Português",
        featuresSubtitle: "POR QUE HABLAYA",
        featuresTitle: "Seu Assistente de Idiomas com IA",
        feature1Title: "Tutor IA Inteligente",
        feature1Desc: "IA adaptativa que aprende seu nível e personaliza conversas",
        feature2Title: "Diálogos Reais",
        feature2Desc: "Pratique conversas práticas que você realmente usará",
        feature3Title: "Sempre Disponível",
        feature3Desc: "Pratique quando a inspiração surgir, dia ou noite",
        feature4Title: "Feedback Instantâneo",
        feature4Desc: "Correções em tempo real de pronúncia e gramática",
        pricingSubtitle: "PLANOS ACESSÍVEIS",
        pricingTitle: "Preços Simples, Máximo Valor",
        pricingDescription: "Comece com um teste grátis de 7 dias, depois escolha o plano que se ajusta aos seus objetivos",
        freeTrial: "Teste Grátis",
        freeTrialPlan: "Teste Grátis de 7 Dias",
        freeTrialSubtitle: "7 dias grátis • Sem cartão de crédito",
        startFreeTrial: "Começar Teste Grátis",
        trialNote: "Cancele a qualquer momento durante o teste",
        annualPlan: "Plano Anual",
        monthlyPlan: "Plano Mensal",
        perYear: "por ano",
        perMonth: "por mês",
        save10: "Economize 10%",
        priceFeature1: "Conversas ilimitadas",
        priceFeature2: "Respostas de IA avançada",
        priceFeature3: "Tecnologia de Reconhecimento de Voz",
        priceFeature4: "Suporte prioritário",
        priceFeature5: "Pratique a qualquer hora, em qualquer lugar",
        priceFeature6: "Analytics avançados",
        buyNow: "Obter",
        moneyBack: "Garantia de devolução de 30 dias",
        testimonialsSubtitle: "HISTÓRIAS DE SUCESSO",
        testimonialsTitle: "Os Estudantes Adoram HablaYa!",
        testimonial1: "Fui do básico a conversas fluidas em apenas 3 meses! A IA se adapta perfeitamente ao seu nível.",
        testimonial2: "Finalmente uma forma acessível de praticar diariamente. O feedback sobre minha pronúncia foi revolucionário.",
        testimonial3: "Como profissional ocupado, adoro poder praticar durante meu trajeto. A IA lembra do meu progresso!",
        finalCtaTitle: "Pronto para Transformar suas Habilidades Linguísticas?",
        finalCtaSubtitle: "Junte-se a 10.000+ estudantes que alcançaram fluência com HablaYa!",
        quickLinks: "Links Rápidos",
        company: "Empresa",
        aboutUs: "Sobre Nós",
        privacy: "Privacidade",
        terms: "Termos",
        footerAbout: "Domínio de idiomas com IA por LearnWG",
        copyright: "© 2025 Learn WG. Todos os direitos reservados.",
        aboutTitle: "Sobre LearnWG",
        aboutText: "LearnWG é uma empresa de tecnologia educacional que cria soluções inovadoras para aprendizado de idiomas com IA que tornam o domínio de novos idiomas acessível, eficaz e agradável para todos.",
        privacyTitle: "Política de Privacidade",
        privacyText: "Priorizamos sua privacidade. Seus dados são criptografados e usados apenas para melhorar sua experiência de aprendizado. Nunca vendemos ou compartilhamos suas informações com terceiros sem consentimento explícito.",
        termsTitle: "Termos de Serviço",
        termsText: "Ao acessar HablaYa!, você concorda com nossos termos. As assinaturas se renovam automaticamente, mas podem ser canceladas a qualquer momento. Oferecemos garantia de devolução de 30 dias se você não estiver satisfeito.",
        locationMexico: "Cidade do México",
        locationGuadalajara: "Guadalajara",
        locationMonterrey: "Monterrey",
        locationBrazil: "São Paulo",
        popularChoice: "Mais Popular",
        liveChat: "Conversa ao Vivo",
        loginTitle: "Entrar",
        emailLabel: "Email",
        passwordLabel: "Senha",
        loginButton: "Entrar",
        noAccount: "Não tem uma conta?",
        signupTitle: "Criar Conta",
        nameLabel: "Nome",
        signupButton: "Cadastrar",
        haveAccount: "Já tem uma conta?",
        dashboardTitle: "Seu Painel de Aprendizado",
        englishSessions: "Sessões em Inglês",
        spanishSessions: "Sessões em Espanhol",
        portugueseSessions: "Sessões em Português",
        totalSessions: "Sessões Totais",
        currentLevel: "Nível Atual",
        subscription: "Assinatura",
        trialStatus: "Status do Teste",
        startSession: "Iniciar Nova Sessão",
        logoutButton: "Sair",
        startChatbot: "Iniciar Tutor de Idiomas",
        paymentManagement: "Gestão de Pagamentos",
        currentPlan: "Plano Atual",
        billingHistory: "Histórico de Faturamento",
        upgradePlan: "Atualizar Plano",
        manageSubscription: "Gerenciar",
        viewAllTransactions: "Ver Todas",
        trialExpired: "Teste Expirado",
        trialActive: "Teste Ativo",
        daysLeft: "dias restantes",
        upgradeNow: "Atualizar Agora"
    }
};

// Initialize Firebase
function initializeFirebase() {
    try {
        // Check if Firebase SDK is loaded
        if (typeof firebase === 'undefined') {
            console.error('Firebase SDK not loaded');
            alert('Firebase SDK not loaded. Please refresh the page.');
            return;
        }
        
        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDCgyLbGewcv6zfz7eCSNBKmhPF3fKurew",
            authDomain: "hablaya-79760.firebaseapp.com",
            projectId: "hablaya-79760",
            storageBucket: "hablaya-79760.appspot.com",
            messagingSenderId: "933344055830",
            appId: "1:933344055830:web:d39edec28fc6395e259b37"
        };
        
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log('Firebase initialized successfully');
        } else {
            console.log('Firebase already initialized');
        }
        
        // Initialize Firebase services
        auth = firebase.auth();
        db = firebase.firestore();
        
        console.log('Firebase services initialized');
        
        // Test Firebase connection
        auth.onAuthStateChanged(user => {
            console.log('Firebase auth state changed:', user ? 'User logged in' : 'No user');
        });
        
    } catch (error) {
        console.error('Error initializing Firebase:', error);
        alert('Error initializing Firebase. Please check the console for details.');
    }
}

// Initialize the app
function initializeApp() {
    // Check if user has seen intro page
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    
    if (!hasSeenIntro) {
        // Show intro page first
        document.getElementById('intro-page').style.display = 'flex';
        document.getElementById('main-app').style.display = 'none';
        
        // Initialize intro page functionality
        initializeIntroPage();
    } else {
        // Show main app directly
        document.getElementById('intro-page').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
        initializeMainApp();
    }
}

// Initialize intro page functionality
function initializeIntroPage() {
    // Set up intro page language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const langButtons = document.querySelectorAll('.lang-btn');
            const index = Array.from(langButtons).indexOf(this);
            const lang = ['es', 'en', 'pt'][index];
            changeLanguage(lang);
        });
    });
    
    // Update intro page language
    const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
    updateIntroLanguage(currentLang);
}

// Start the main app
function startApp() {
    localStorage.setItem('hasSeenIntro', 'true');
    document.getElementById('intro-page').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
    initializeMainApp();
}

// Initialize main app functionality
function initializeMainApp() {
    // Initialize Firebase
    initializeFirebase();
    
    // Initialize selectors
    initializeSelectors();
    
    // Set up event listeners
    setupEventListeners();
    
    // Check promo banner
    checkPromoBanner();
    
    // Update pricing section
    if (window.PRICING_CONFIG) {
        updatePricingSection();
    }
    
    // Initialize chatbot
    if (typeof initializeChatbot === 'function') {
        initializeChatbot();
    }
}

// Toggle language/currency selector
function toggleLanguageSelector() {
    const selector = document.getElementById('language-currency-selector');
    if (selector.style.display === 'none' || selector.style.display === '') {
        selector.style.display = 'block';
    } else {
        selector.style.display = 'none';
    }
}

// Close language/currency selector
function closeLanguageSelector() {
    const selector = document.getElementById('language-currency-selector');
    selector.style.display = 'none';
}

// Update intro page language
function updateIntroLanguage(lang) {
    const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
    
    // Update intro page elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        translateElement(element, lang);
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate current language button
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach((btn, index) => {
        const langValue = ['es', 'en', 'pt'][index];
        if (langValue === lang) {
            btn.classList.add('active');
        }
    });
}

// Enhanced language change function
function changeLanguage(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('selectedLanguage', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        translateElement(element, lang);
    });
    
    // Update language flags
    updateLanguageFlags();
    
    // Update intro page if visible
    if (document.getElementById('intro-page').style.display !== 'none') {
        updateIntroLanguage(lang);
    }
    
    // Update pricing section with new language
    if (window.PRICING_CONFIG) {
        updatePricingSection();
    }
    
    // Update chatbot language if available
    if (window.chatbotConfig) {
        chatbotConfig.currentLanguage = lang;
    }
    
    // Close selector if open
    closeLanguageSelector();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    const savedCurrency = localStorage.getItem('selectedCurrency') || 'MXN';
    
    // Apply saved preferences
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-lang', savedLanguage);
    
    // Initialize the app
    initializeApp();
});

// Export functions for global access
window.changeLanguage = changeLanguage;
window.changeCurrency = changeCurrency;
window.toggleLanguageSelector = toggleLanguageSelector;
window.closeLanguageSelector = closeLanguageSelector;
window.startApp = startApp;
window.closePromoBanner = closePromoBanner;
window.showLoginFromIntro = showLoginFromIntro;

// Auth functions
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('login-modal').style.display = 'none';
            // Success - modal will close via auth state change handler
        })
        .catch(error => {
            document.getElementById('login-error').textContent = error.message;
        });
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Create user document in Firestore with trial data
            const trialEnd = new Date();
            trialEnd.setDate(trialEnd.getDate() + 7); // 7-day trial
            
            return db.collection('users').doc(userCredential.user.uid).set({
                name: name,
                email: email,
                englishSessions: 0,
                spanishSessions: 0,
                portugueseSessions: 0,
                trialActive: true,
                trialEnd: firebase.firestore.Timestamp.fromDate(trialEnd),
                trialUsed: false,
                subscription: 'trial',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLogin: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            document.getElementById('signup-modal').style.display = 'none';
            // Success - modal will close via auth state change handler
        })
        .catch(error => {
            document.getElementById('signup-error').textContent = error.message;
        });
}

function handleLogout() {
    auth.signOut();
}

function showLanguageSelection() {
    // Show language selection modal or dropdown
    const languages = ['English', 'Spanish', 'Portuguese', 'French', 'Italian'];
    const language = prompt('Select a language to practice:\n' + languages.join('\n'));
    if (language && languages.includes(language)) {
        startNewSession(language.toLowerCase());
    }
}

// Show login from intro page
function showLoginFromIntro() {
    // Show main app temporarily to access login modal
    document.getElementById('main-app').style.display = 'block';
    document.getElementById('login-modal').style.display = 'flex';
    
    // Hide intro page
    document.getElementById('intro-page').style.display = 'none';
}

// Set up all event listeners
function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    const mobileLangToggle = document.getElementById('mobile-lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    if (mobileLangToggle) {
        mobileLangToggle.addEventListener('click', toggleLanguage);
    }
    
    // Language selector toggle button (if exists)
    const langSelectorToggle = document.getElementById('lang-selector-toggle');
    if (langSelectorToggle) {
        langSelectorToggle.addEventListener('click', toggleLanguageSelector);
    }
    
    // Auth button event listeners
    const authBtn = document.getElementById('auth-btn');
    const mobileAuthBtn = document.getElementById('mobile-auth-btn');
    const tryFreeBtn = document.getElementById('try-free-btn');
    const tryChatbotBtns = document.querySelectorAll('.try-chatbot');
    
    if (authBtn) {
        authBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('login-modal').style.display = 'flex';
        });
    }
    
    if (mobileAuthBtn) {
        mobileAuthBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('login-modal').style.display = 'flex';
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });
    }
    
    if (tryFreeBtn) {
        tryFreeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('signup-modal').style.display = 'flex';
        });
    }
    
    tryChatbotBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (auth.currentUser) {
                startNewSession('all');
            } else {
                document.getElementById('login-modal').style.display = 'flex';
            }
        });
    });
    
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    }
    
    // Modal functionality
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
            document.body.style.overflow = '';
        });
    });
    
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.classList.contains('modal-trigger')) return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
                if (mobileMenuBtn) {
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                }
                document.body.style.overflow = '';
            }
        });
    });
    
    // Auth forms
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Auth modal switching
    document.querySelectorAll('.switch-auth').forEach(button => {
        button.addEventListener('click', function() {
            const targetModal = this.getAttribute('data-target');
            const currentModal = this.closest('.modal');
            
            currentModal.style.display = 'none';
            document.getElementById(targetModal).style.display = 'flex';
        });
    });
    
    // Dashboard logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Dashboard actions
    const startSessionBtn = document.getElementById('start-session-btn');
    if (startSessionBtn) {
        startSessionBtn.addEventListener('click', function() {
            showLanguageSelection();
        });
    }
    
    const upgradeBtn = document.querySelector('.upgrade-btn');
    if (upgradeBtn) {
        upgradeBtn.addEventListener('click', showUpgradeOptions);
    }
    
    const manageBtn = document.querySelector('.manage-btn');
    if (manageBtn) {
        manageBtn.addEventListener('click', showSubscriptionManagement);
    }
    
    // Trial button event listener
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('trial-btn')) {
            e.preventDefault();
            if (auth.currentUser) {
                activateTrial();
            } else {
                document.getElementById('signup-modal').style.display = 'flex';
            }
        }
        
        // Upgrade plan button
        if (e.target.classList.contains('upgrade-btn')) {
            e.preventDefault();
            showUpgradeOptions();
        }
        
        // Manage subscription button
        if (e.target.classList.contains('manage-btn')) {
            e.preventDefault();
            showSubscriptionManagement();
        }
    });
    
    // Close language selector when clicking outside
    document.addEventListener('click', function(e) {
        const selector = document.getElementById('language-currency-selector');
        const langToggle = document.getElementById('lang-selector-toggle');
        
        if (selector && selector.style.display === 'block') {
            if (!selector.contains(e.target) && !langToggle?.contains(e.target)) {
                closeLanguageSelector();
            }
        }
    });
    
    // Auth state observer
    auth.onAuthStateChanged(user => {
        if (user) {
            // User is signed in
            showDashboard(user);
            updateUserLastLogin(user.uid);
            setPayPalUserId(user);
        } else {
            // User is signed out
            hideDashboard();
        }
    });
    
    // Update flag based on language
    updateLanguageFlags();
    
    // Initialize pricing section with centralized config
    if (window.PRICING_CONFIG) {
        updatePricingSection();
    }
    
    // Initialize theme
    updateThemeIcon();
}
