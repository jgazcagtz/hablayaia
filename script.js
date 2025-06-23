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
        trySpanish: "Probar Espanhol",
        portugueseVersion: "Versión en Portugués",
        portugueseDesc: "Practica tu portugués con nuestro tutor de IA",
        tryPortuguese: "Probar Portugués",
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
        upgradeNow: "Actualizar Ahora",
        selectLanguage: "Seleccionar Idioma para Praticar",
        upgradePlanTitle: "Actualizar tu Plan",
        manageSubscriptionTitle: "Gestionar Suscripción",
        cancelSubscription: "Cancelar Suscripción",
        downloadInvoice: "Descargar Factura",
        
        // Footer
        'footerAbout': 'Sobre',
        'footerPrivacy': 'Privacidad',
        'footerTerms': 'Términos',
        'footerContact': 'Contacto',
        'footerCopyright': '© 2024 HablaYa!. Todos los derechos reservados.'
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
        viewAllTransactions: "View All Transactions",
        trialExpired: "Trial Expired",
        trialActive: "Trial Active",
        daysLeft: "days left",
        upgradeNow: "Upgrade Now",
        selectLanguage: "Select Language to Practice",
        upgradePlanTitle: "Upgrade Your Plan",
        manageSubscriptionTitle: "Manage Subscription",
        cancelSubscription: "Cancel Subscription",
        downloadInvoice: "Download Invoice",
        
        // Footer
        'footerAbout': 'About',
        'footerPrivacy': 'Privacy',
        'footerTerms': 'Terms',
        'footerContact': 'Contact',
        'footerCopyright': '© 2024 HablaYa!. All rights reserved.'
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
        freeTrialPlan: "Teste Gratuito de 7 Dias",
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
        viewAllTransactions: "Ver Todas as Transações",
        trialExpired: "Teste Expirado",
        trialActive: "Teste Ativo",
        daysLeft: "dias restantes",
        upgradeNow: "Atualizar Agora",
        selectLanguage: "Selecionar Idioma para Praticar",
        upgradePlanTitle: "Atualizar seu Plano",
        manageSubscriptionTitle: "Gerenciar Assinatura",
        cancelSubscription: "Cancelar Assinatura",
        downloadInvoice: "Baixar Fatura",
        
        // Footer
        'footerAbout': 'Sobre',
        'footerPrivacy': 'Privacidade',
        'footerTerms': 'Termos',
        'footerContact': 'Contato',
        'footerCopyright': '© 2024 HablaYa!. Todos os direitos reservados.'
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
window.testDashboard = testDashboard;
window.startNewSession = startNewSession;
window.showLanguageSelection = showLanguageSelection;
window.closeLanguageModal = closeLanguageModal;
window.closeUpgradeModal = closeUpgradeModal;
window.closeManageModal = closeManageModal;
window.showUpgradeModal = showUpgradeModal;
window.upgradeToPlan = upgradeToPlan;
window.cancelSubscription = cancelSubscription;
window.downloadInvoice = downloadInvoice;

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

// showLanguageSelection function is defined later in the file

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
    
    // Demo section buttons
    const demoButtons = document.querySelectorAll('.demo-card .try-chatbot');
    demoButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const language = this.getAttribute('data-language');
            
            if (auth.currentUser) {
                if (language === 'speech') {
                    // Handle voice recognition demo
                    alert('Voice recognition feature coming soon!');
                } else if (language === 'progress') {
                    // Handle progress tracking demo
                    alert('Progress tracking demo coming soon!');
                } else {
                    // Default action - start session
                    startNewSession(language || 'all');
                }
            } else {
                // Show login modal for non-authenticated users
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
    
    // Dashboard start chatbot
    const startChatbotBtn = document.getElementById('start-chatbot');
    if (startChatbotBtn) {
        startChatbotBtn.addEventListener('click', function() {
            // Direct redirect to the Vercel app
            window.open('https://hablayalanguagetutor.vercel.app/', '_blank');
        });
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

// Close promotional banner
function closePromoBanner() {
    const banner = document.getElementById('promo-banner');
    if (banner) {
        banner.style.display = 'none';
        localStorage.setItem('promoBannerClosed', 'true');
    }
}

// Check if promo banner should be shown
function checkPromoBanner() {
    const bannerClosed = localStorage.getItem('promoBannerClosed');
    const banner = document.getElementById('promo-banner');
    
    if (banner && !bannerClosed) {
        banner.style.display = 'block';
    }
}

// Toggle theme (light/dark)
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme icon
    updateThemeIcon();
}

// Toggle language selector
function toggleLanguage() {
    toggleLanguageSelector();
}

// Update theme icon
function updateThemeIcon() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Update language flags
function updateLanguageFlags() {
    const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
    const langToggle = document.getElementById('lang-toggle');
    const mobileLangToggle = document.getElementById('mobile-lang-toggle');
    
    if (langToggle) {
        const flag = langToggle.querySelector('.lang-flag');
        if (flag) {
            flag.textContent = getLanguageFlag(currentLang);
        }
    }
    
    if (mobileLangToggle) {
        const flag = mobileLangToggle.querySelector('.lang-flag');
        if (flag) {
            flag.textContent = getLanguageFlag(currentLang);
        }
    }
}

// Get language flag emoji
function getLanguageFlag(lang) {
    const flags = {
        'es': '🇪🇸',
        'en': '🇺🇸',
        'pt': '🇧🇷'
    };
    return flags[lang] || '🇪🇸';
}

// Initialize selectors
function initializeSelectors() {
    // Set initial language and currency
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    const savedCurrency = localStorage.getItem('selectedCurrency') || 'MXN';
    
    // Update selectors
    const languageSelect = document.getElementById('language-select');
    const currencySelect = document.getElementById('currency-select');
    
    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }
    
    if (currencySelect) {
        currencySelect.value = savedCurrency;
    }
    
    // Update UI
    updateLanguageUI();
    updateCurrencyUI();
}

// Update language UI
function updateLanguageUI() {
    const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
    document.documentElement.setAttribute('data-lang', currentLang);
    updateLanguageFlags();
}

// Update currency UI
function updateCurrencyUI() {
    const currentCurrency = localStorage.getItem('selectedCurrency') || 'MXN';
    updatePricingDisplay();
}

// Change currency
function changeCurrency(currency) {
    localStorage.setItem('selectedCurrency', currency);
    updatePricingDisplay();
    closeLanguageSelector();
}

// Update pricing display with current currency
function updatePricingDisplay() {
    const currentCurrency = localStorage.getItem('selectedCurrency') || 'MXN';
    
    // Update all pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        const plan = card.getAttribute('data-plan');
        if (plan && window.PRICING_CONFIG && window.PRICING_CONFIG.plans[plan]) {
            const planData = window.PRICING_CONFIG.plans[plan];
            const convertedPrice = convertPrice(planData.price, currentCurrency);
            const convertedOriginalPrice = convertPrice(planData.originalPrice, currentCurrency);
            
            const currentPriceEl = card.querySelector('.current-price');
            const originalPriceEl = card.querySelector('.original-price');
            
            if (currentPriceEl) {
                currentPriceEl.textContent = formatPrice(convertedPrice, currentCurrency);
            }
            
            if (originalPriceEl) {
                originalPriceEl.textContent = formatPrice(convertedOriginalPrice, currentCurrency);
            }
        }
    });
    
    // Update PayPal forms
    updatePayPalForms();
}

// Convert price to different currency
function convertPrice(price, targetCurrency) {
    if (!window.PRICING_CONFIG || !window.PRICING_CONFIG.exchangeRates) {
        return price;
    }
    
    const rates = window.PRICING_CONFIG.exchangeRates;
    const baseCurrency = 'MXN';
    
    if (targetCurrency === baseCurrency) {
        return price;
    }
    
    if (rates[targetCurrency]) {
        return Math.round(price / rates[targetCurrency]);
    }
    
    return price;
}

// Format price with currency symbol
function formatPrice(price, currency) {
    const symbols = {
        'MXN': '$',
        'USD': '$',
        'EUR': '€',
        'BRL': 'R$'
    };
    
    const symbol = symbols[currency] || '$';
    return `${symbol}${price.toLocaleString()}`;
}

// Update PayPal forms with current currency
function updatePayPalForms() {
    const currentCurrency = localStorage.getItem('selectedCurrency') || 'MXN';
    
    document.querySelectorAll('.paypal-form').forEach(form => {
        const plan = form.getAttribute('data-plan');
        if (plan && window.PRICING_CONFIG && window.PRICING_CONFIG.plans[plan]) {
            const planData = window.PRICING_CONFIG.plans[plan];
            const convertedPrice = convertPrice(planData.price, currentCurrency);
            
            // Update amount field
            const amountField = form.querySelector('input[name="amount"]');
            if (amountField) {
                amountField.value = convertedPrice.toFixed(2);
            }
            
            // Update a3 field (for subscriptions)
            const a3Field = form.querySelector('input[name="a3"]');
            if (a3Field) {
                a3Field.value = convertedPrice.toFixed(2);
            }
            
            // Update currency code
            const currencyField = form.querySelector('input[name="currency_code"]');
            if (currencyField) {
                currencyField.value = currentCurrency;
            }
        }
    });
}

// Update pricing section
function updatePricingSection() {
    if (window.PRICING_CONFIG) {
        updatePricingDisplay();
    }
}

// Translate element based on language
function translateElement(element, lang) {
    const key = element.getAttribute('data-i18n');
    if (!key) return;
    
    const translations = {
        es: {
            // Navigation
            'navHome': 'Inicio',
            'navFeatures': 'Características',
            'navPricing': 'Precios',
            'navAbout': 'Acerca de',
            'navLogin': 'Iniciar Sesión',
            'navSignup': 'Registrarse',
            
            // Hero Section
            'heroTitle': 'Aprende idiomas con IA personalizada',
            'heroSubtitle': 'Domina inglés, español, portugués, italiano y francés con tu tutor de IA personalizado',
            'startFreeTrial': 'Prueba Gratis',
            'learnMore': 'Conoce Más',
            
            // Demo Section
            'demoTitle': 'Prueba Nuestro Tutor de IA',
            'demoSubtitle': 'Prueba nuestro tutor de IA con todos los idiomas soportados',
            'allLanguages': 'Todos los Idiomas',
            'allLanguagesDesc': 'Practica inglés, español, portugués, italiano y francés',
            'tryNow': 'Probar Ahora',
            'progressTracking': 'Seguimiento de Progreso',
            'progressDesc': 'Rastrea tu mejora desde niveles A1 hasta C2',
            'seeDemo': 'Ver Demo',
            'speechRecognition': 'Reconocimiento de Voz',
            'speechDesc': 'Practica pronunciación con retroalimentación en tiempo real',
            'tryVoice': 'Probar Voz',
            
            // Features Section
            'featuresSubtitle': 'POR QUÉ HABLAYA',
            'featuresTitle': 'Tu Compañero de IA para Idiomas',
            'feature1Title': 'Tutor de IA Inteligente',
            'feature1Desc': 'IA adaptativa que aprende tu nivel y personaliza conversaciones',
            'feature2Title': '5 Idiomas',
            'feature2Desc': 'Inglés, español, portugués, italiano y francés de A1 a C2',
            'feature3Title': 'Siempre Disponible',
            'feature3Desc': 'Practica cuando te inspire, día o noche',
            'feature4Title': 'Retroalimentación Instantánea',
            'feature4Desc': 'Correcciones en tiempo real de pronunciación y gramática',
            
            // Pricing Section
            'pricingSubtitle': 'PLANES ACCESIBLES',
            'pricingTitle': 'Precios Simples, Máximo Valor',
            'pricingDescription': 'Comienza con una prueba gratuita de 7 días, luego elige el plan que se ajuste a tus metas',
            'freeTrial': 'Prueba Gratis',
            'freeTrialPlan': 'Prueba Gratuita de 7 Días',
            'freeTrialSubtitle': '7 días gratis • Sin tarjeta de crédito',
            'priceFeature1': 'Todos los 5 idiomas incluidos',
            'priceFeature2': 'Niveles A1 a C2',
            'priceFeature3': 'Reconocimiento de voz',
            'priceFeature4': 'Seguimiento de progreso',
            'priceFeature5': 'Acceso completo a todas las funciones',
            'priceFeature6': 'Analíticas avanzadas',
            'startFreeTrial': 'Comenzar Prueba Gratis',
            'trialNote': 'Cancela en cualquier momento durante la prueba',
            'bestValue': 'Mejor Valor',
            'fiveYearPlan': 'Plan de 5 Años',
            'perFiveYears': 'por 5 años',
            'save34': 'Ahorra 34%',
            'popularChoice': 'Más Popular',
            'twoYearPlan': 'Plan de 2 Años',
            'perTwoYears': 'por 2 años',
            'save17': 'Ahorra 17%',
            'annualPlan': 'Plan Anual',
            'perYear': 'por año',
            'save11': 'Ahorra 11%',
            'quarterlyPlan': 'Plan Trimestral',
            'perQuarter': 'por trimestre',
            'buyNow': 'Comprar Ahora',
            'moneyBack': 'Garantía de devolución de 30 días',
            
            // Instructions Section
            'instructionsTitle': 'Cómo Comenzar',
            'instructionsSubtitle': 'Sigue estos pasos simples para comenzar tu viaje de aprendizaje',
            'step1Title': 'Prueba Gratis',
            'step1Desc': 'Regístrate gratis y obtén 7 días de acceso completo sin tarjeta de crédito',
            'step2Title': 'Elige tu Plan',
            'step2Desc': 'Selecciona el plan que mejor se ajuste a tus metas de aprendizaje',
            'step3Title': 'Paga Seguro',
            'step3Desc': 'Usa PayPal para un pago seguro y protegido',
            'step4Title': 'Comienza a Aprender',
            'step4Desc': 'Accede inmediatamente a todas las funciones y comienza a practicar',
            
            // Promotional Banner
            'promoMessage': '¡OFERTA ESPECIAL! 50% de descuento por 90 días - ¡Precios introductorios limitados!',
            
            // Language/Currency Selector
            'settingsTitle': 'Configuración',
            'languageLabel': 'Idioma:',
            'currencyLabel': 'Moneda:',
            
            // Auth Modals
            'loginTitle': 'Iniciar Sesión',
            'signupTitle': 'Crear Cuenta',
            'emailLabel': 'Correo Electrónico',
            'passwordLabel': 'Contraseña',
            'nameLabel': 'Nombre',
            'loginButton': 'Iniciar Sesión',
            'signupButton': 'Registrarse',
            'noAccount': '¿No tienes cuenta?',
            'haveAccount': '¿Ya tienes cuenta?',
            
            // Dashboard
            'dashboardTitle': 'Tu Panel de Aprendizaje',
            'logoutButton': 'Cerrar Sesión',
            'totalSessions': 'Sesiones Totales',
            'currentLevel': 'Nivel Actual',
            'subscription': 'Suscripción',
            'trialStatus': 'Estado de Prueba',
            'paymentManagement': 'Gestión de Pagos',
            'currentPlan': 'Plan Actual',
            'billingHistory': 'Historial de Facturación',
            'upgradePlan': 'Actualizar Plan',
            'manageSubscription': 'Gestionar',
            'viewAllTransactions': 'Ver Todas las Transacciones',
            'startSession': 'Iniciar Nueva Sesión',
            'startChatbot': 'Iniciar Tutor de Idiomas',
            'selectLanguage': 'Seleccionar Idioma para Praticar',
            'upgradePlanTitle': 'Actualizar tu Plan',
            'manageSubscriptionTitle': 'Gestionar Suscripción',
            'cancelSubscription': 'Cancelar Suscripción',
            'downloadInvoice': 'Descargar Factura',
            
            // Footer
            'footerAbout': 'Sobre',
            'footerPrivacy': 'Privacidad',
            'footerTerms': 'Términos',
            'footerContact': 'Contacto',
            'footerCopyright': '© 2024 HablaYa!. Todos los derechos reservados.'
        },
        en: {
            // Navigation
            'navHome': 'Home',
            'navFeatures': 'Features',
            'navPricing': 'Pricing',
            'navAbout': 'About',
            'navLogin': 'Login',
            'navSignup': 'Sign Up',
            
            // Hero Section
            'heroTitle': 'Learn languages with personalized AI',
            'heroSubtitle': 'Master English, Spanish, Portuguese, Italian and French with your personalized AI tutor',
            'startFreeTrial': 'Start Free Trial',
            'learnMore': 'Learn More',
            
            // Demo Section
            'demoTitle': 'Try Our AI Tutor',
            'demoSubtitle': 'Try our AI tutor with all supported languages',
            'allLanguages': 'All Languages',
            'allLanguagesDesc': 'Practice English, Spanish, Portuguese, Italian and French',
            'tryNow': 'Try Now',
            'progressTracking': 'Progress Tracking',
            'progressDesc': 'Track your improvement from A1 to C2 levels',
            'seeDemo': 'See Demo',
            'speechRecognition': 'Speech Recognition',
            'speechDesc': 'Practice pronunciation with real-time feedback',
            'tryVoice': 'Try Voice',
            
            // Features Section
            'featuresSubtitle': 'WHY HABLAYA',
            'featuresTitle': 'Your Personal AI Language Partner',
            'feature1Title': 'Smart AI Tutor',
            'feature1Desc': 'Adaptive AI that learns your level and personalizes conversations',
            'feature2Title': '5 Languages',
            'feature2Desc': 'English, Spanish, Portuguese, Italian and French from A1 to C2',
            'feature3Title': 'Always Available',
            'feature3Desc': 'Practice whenever inspiration strikes, day or night',
            'feature4Title': 'Instant Feedback',
            'feature4Desc': 'Real-time corrections on pronunciation and grammar',
            
            // Pricing Section
            'pricingSubtitle': 'AFFORDABLE PLANS',
            'pricingTitle': 'Simple Pricing, Maximum Value',
            'pricingDescription': 'Start with a 7-day free trial, then choose the plan that fits your goals',
            'freeTrial': 'Free Trial',
            'freeTrialPlan': '7-Day Free Trial',
            'freeTrialSubtitle': '7 days free • No credit card required',
            'priceFeature1': 'All 5 languages included',
            'priceFeature2': 'A1 to C2 levels',
            'priceFeature3': 'Speech recognition',
            'priceFeature4': 'Progress tracking',
            'priceFeature5': 'Full access to all features',
            'priceFeature6': 'Advanced analytics',
            'startFreeTrial': 'Start Free Trial',
            'trialNote': 'Cancel anytime during trial',
            'bestValue': 'Best Value',
            'fiveYearPlan': '5-Year Plan',
            'perFiveYears': 'for 5 years',
            'save34': 'Save 34%',
            'popularChoice': 'Most Popular',
            'twoYearPlan': '2-Year Plan',
            'perTwoYears': 'for 2 years',
            'save17': 'Save 17%',
            'annualPlan': 'Annual Plan',
            'perYear': 'per year',
            'save11': 'Save 11%',
            'quarterlyPlan': 'Quarterly Plan',
            'perQuarter': 'per quarter',
            'buyNow': 'Buy Now',
            'moneyBack': '30-day money back guarantee',
            
            // Instructions Section
            'instructionsTitle': 'How to Get Started',
            'instructionsSubtitle': 'Follow these simple steps to begin your learning journey',
            'step1Title': 'Free Trial',
            'step1Desc': 'Sign up for free and get 7 days of full access without credit card',
            'step2Title': 'Choose Your Plan',
            'step2Desc': 'Select the plan that best fits your learning goals',
            'step3Title': 'Pay Securely',
            'step3Desc': 'Use PayPal for secure and protected payment',
            'step4Title': 'Start Learning',
            'step4Desc': 'Access all features immediately and start practicing',
            
            // Promotional Banner
            'promoMessage': 'SPECIAL OFFER! 50% discount for 90 days - Limited introductory pricing!',
            
            // Language/Currency Selector
            'settingsTitle': 'Settings',
            'languageLabel': 'Language:',
            'currencyLabel': 'Currency:',
            
            // Auth Modals
            'loginTitle': 'Log In',
            'signupTitle': 'Create Account',
            'emailLabel': 'Email',
            'passwordLabel': 'Password',
            'nameLabel': 'Name',
            'loginButton': 'Log In',
            'signupButton': 'Sign Up',
            'noAccount': "Don't have an account?",
            'haveAccount': 'Already have an account?',
            
            // Dashboard
            'dashboardTitle': 'Your Learning Dashboard',
            'logoutButton': 'Log Out',
            'totalSessions': 'Total Sessions',
            'currentLevel': 'Current Level',
            'subscription': 'Subscription',
            'trialStatus': 'Trial Status',
            'paymentManagement': 'Payment Management',
            'currentPlan': 'Current Plan',
            'billingHistory': 'Billing History',
            'upgradePlan': 'Upgrade Plan',
            'manageSubscription': 'Manage',
            'viewAllTransactions': 'View All Transactions',
            'startSession': 'Start a New Session',
            'startChatbot': 'Start Language Tutor',
            'selectLanguage': 'Select Language to Practice',
            'upgradePlanTitle': 'Upgrade Your Plan',
            'manageSubscriptionTitle': 'Manage Subscription',
            'cancelSubscription': 'Cancel Subscription',
            'downloadInvoice': 'Download Invoice',
            
            // Footer
            'footerAbout': 'About',
            'footerPrivacy': 'Privacy',
            'footerTerms': 'Terms',
            'footerContact': 'Contact',
            'footerCopyright': '© 2024 HablaYa!. All rights reserved.'
        },
        pt: {
            // Navigation
            'navHome': 'Início',
            'navFeatures': 'Recursos',
            'navPricing': 'Preços',
            'navAbout': 'Sobre',
            'navLogin': 'Entrar',
            'navSignup': 'Cadastrar',
            
            // Hero Section
            'heroTitle': 'Aprenda idiomas com IA personalizada',
            'heroSubtitle': 'Domine inglês, espanhol, português, italiano e francês com seu tutor de IA personalizado',
            'startFreeTrial': 'Começar Teste Grátis',
            'learnMore': 'Saiba Mais',
            
            // Demo Section
            'demoTitle': 'Experimente Nosso Tutor de IA',
            'demoSubtitle': 'Experimente nosso tutor de IA com todos os idiomas suportados',
            'allLanguages': 'Todos os Idiomas',
            'allLanguagesDesc': 'Pratique inglês, espanhol, português, italiano e francês',
            'tryNow': 'Experimentar Agora',
            'progressTracking': 'Acompanhamento de Progresso',
            'progressDesc': 'Acompanhe sua melhoria dos níveis A1 ao C2',
            'seeDemo': 'Ver Demo',
            'speechRecognition': 'Reconhecimento de Voz',
            'speechDesc': 'Pratique pronúncia com feedback em tempo real',
            'tryVoice': 'Experimentar Voz',
            
            // Features Section
            'featuresSubtitle': 'POR QUE HABLAYA',
            'featuresTitle': 'Seu Parceiro de IA para Idiomas',
            'feature1Title': 'Tutor de IA Inteligente',
            'feature1Desc': 'IA adaptativa que aprende seu nível e personaliza conversas',
            'feature2Title': '5 Idiomas',
            'feature2Desc': 'Inglês, espanhol, português, italiano e francês de A1 a C2',
            'feature3Title': 'Sempre Disponível',
            'feature3Desc': 'Pratique quando a inspiração surgir, dia ou noite',
            'feature4Title': 'Feedback Instantâneo',
            'feature4Desc': 'Correções em tempo real de pronúncia e gramática',
            
            // Pricing Section
            'pricingSubtitle': 'PLANOS ACESSÍVEIS',
            'pricingTitle': 'Preços Simples, Máximo Valor',
            'pricingDescription': 'Comece com um teste gratuito de 7 dias, depois escolha o plano que se adapta aos seus objetivos',
            'freeTrial': 'Teste Grátis',
            'freeTrialPlan': 'Teste Gratuito de 7 Dias',
            'freeTrialSubtitle': '7 dias grátis • Sem cartão de crédito necessário',
            'priceFeature1': 'Todos os 5 idiomas incluídos',
            'priceFeature2': 'Níveis A1 a C2',
            'priceFeature3': 'Reconhecimento de voz',
            'priceFeature4': 'Acompanhamento de progresso',
            'priceFeature5': 'Acesso completo a todos os recursos',
            'priceFeature6': 'Análises avançadas',
            'startFreeTrial': 'Começar Teste Grátis',
            'trialNote': 'Cancele a qualquer momento durante o teste',
            'bestValue': 'Melhor Valor',
            'fiveYearPlan': 'Plano de 5 Anos',
            'perFiveYears': 'por 5 anos',
            'save34': 'Economize 34%',
            'popularChoice': 'Mais Popular',
            'twoYearPlan': 'Plano de 2 Anos',
            'perTwoYears': 'por 2 anos',
            'save17': 'Economize 17%',
            'annualPlan': 'Plano Anual',
            'perYear': 'por ano',
            'save11': 'Economize 11%',
            'quarterlyPlan': 'Plano Trimestral',
            'perQuarter': 'por trimestre',
            'buyNow': 'Comprar Agora',
            'moneyBack': 'Garantia de devolução de 30 dias',
            
            // Instructions Section
            'instructionsTitle': 'Como Começar',
            'instructionsSubtitle': 'Siga estes passos simples para começar sua jornada de aprendizado',
            'step1Title': 'Teste Grátis',
            'step1Desc': 'Cadastre-se gratuitamente e obtenha 7 dias de acesso completo sem cartão de crédito',
            'step2Title': 'Escolha Seu Plano',
            'step2Desc': 'Selecione o plano que melhor se adapta aos seus objetivos de aprendizado',
            'step3Title': 'Pague com Segurança',
            'step3Desc': 'Use PayPal para pagamento seguro e protegido',
            'step4Title': 'Comece a Aprender',
            'step4Desc': 'Acesse todos os recursos imediatamente e comece a praticar',
            
            // Promotional Banner
            'promoMessage': 'OFERTA ESPECIAL! 50% de desconto por 90 dias - Preços introdutórios limitados!',
            
            // Language/Currency Selector
            'settingsTitle': 'Configurações',
            'languageLabel': 'Idioma:',
            'currencyLabel': 'Moeda:',
            
            // Auth Modals
            'loginTitle': 'Entrar',
            'signupTitle': 'Criar Conta',
            'emailLabel': 'Email',
            'passwordLabel': 'Senha',
            'nameLabel': 'Nome',
            'loginButton': 'Entrar',
            'signupButton': 'Cadastrar',
            'noAccount': 'Não tem uma conta?',
            'haveAccount': 'Já tem uma conta?',
            
            // Dashboard
            'dashboardTitle': 'Seu Painel de Aprendizado',
            'logoutButton': 'Sair',
            'totalSessions': 'Sessões Totais',
            'currentLevel': 'Nível Atual',
            'subscription': 'Assinatura',
            'trialStatus': 'Status do Teste',
            'paymentManagement': 'Gerenciamento de Pagamentos',
            'currentPlan': 'Plano Atual',
            'billingHistory': 'Histórico de Cobrança',
            'upgradePlan': 'Atualizar Plano',
            'manageSubscription': 'Gerenciar',
            'viewAllTransactions': 'Ver Todas as Transações',
            'startSession': 'Iniciar Nova Sessão',
            'startChatbot': 'Iniciar Tutor de Idiomas',
            'selectLanguage': 'Selecionar Idioma para Praticar',
            'upgradePlanTitle': 'Atualizar seu Plano',
            'manageSubscriptionTitle': 'Gerenciar Assinatura',
            'cancelSubscription': 'Cancelar Assinatura',
            'downloadInvoice': 'Baixar Fatura',
            
            // Footer
            'footerAbout': 'Sobre',
            'footerPrivacy': 'Privacidade',
            'footerTerms': 'Termos',
            'footerContact': 'Contato',
            'footerCopyright': '© 2024 HablaYa!. Todos os direitos reservados.'
        }
    };
    
    const translation = translations[lang] && translations[lang][key];
    if (translation) {
        element.textContent = translation;
    }
}

// Show dashboard
function showDashboard(user) {
    const mainApp = document.getElementById('main-app');
    const introPage = document.getElementById('intro-page');
    const dashboard = document.getElementById('dashboard');
    
    if (mainApp) mainApp.style.display = 'none';
    if (introPage) introPage.style.display = 'none';
    if (dashboard) {
        dashboard.style.display = 'block';
    }
    
    // Load user data
    loadUserData();
}

// Hide dashboard
function hideDashboard() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('intro-page').style.display = 'flex';
}

// Load user data for dashboard
function loadUserData() {
    if (!auth.currentUser) return;
    
    const userId = auth.currentUser.uid;
    
    db.collection('users').doc(userId).get()
        .then(doc => {
            if (doc.exists) {
                const userData = doc.data();
                
                // Update user info
                document.getElementById('user-name').textContent = userData.name || 'User';
                document.getElementById('user-email').textContent = userData.email || '';
                
                // Update stats
                const totalSessions = (userData.englishSessions || 0) + 
                                    (userData.spanishSessions || 0) + 
                                    (userData.portugueseSessions || 0);
                document.getElementById('total-count').textContent = totalSessions;
                
                // Update subscription info
                const subscriptionType = userData.subscription || 'trial';
                document.getElementById('subscription-type').textContent = 
                    subscriptionType === 'trial' ? 'Free Trial' : 'Premium';
                
                // Update trial status
                if (userData.trialActive && userData.trialEnd) {
                    const trialEnd = userData.trialEnd.toDate();
                    const now = new Date();
                    const daysLeft = Math.ceil((trialEnd - now) / (1000 * 60 * 60 * 24));
                    
                    if (daysLeft > 0) {
                        document.getElementById('trial-status').textContent = `${daysLeft} days left`;
                        document.getElementById('trial-expiry').textContent = trialEnd.toLocaleDateString();
                    } else {
                        document.getElementById('trial-status').textContent = 'Expired';
                        document.getElementById('trial-expiry').textContent = 'Trial ended';
                    }
                } else {
                    document.getElementById('trial-status').textContent = 'Active';
                    document.getElementById('trial-expiry').textContent = 'Loading...';
                }
                
                // Update plan details
                document.getElementById('plan-details').textContent = 
                    subscriptionType === 'trial' ? '7-day free trial active' : 'Premium subscription active';
                
            }
        })
        .catch(error => {
            console.error('Error loading user data:', error);
        });
}

// Update user last login
function updateUserLastLogin(userId) {
    db.collection('users').doc(userId).update({
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(error => {
        console.error('Error updating last login:', error);
    });
}

// Set PayPal user ID
function setPayPalUserId(user) {
    document.querySelectorAll('#paypal-custom-userid').forEach(field => {
        field.value = user.uid;
    });
}

// Show upgrade options
function showUpgradeOptions() {
    const modal = document.getElementById('upgrade-modal');
    if (modal) {
        modal.style.display = 'flex';
        // Apply translations
        const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
        modal.querySelectorAll('[data-i18n]').forEach(element => {
            translateElement(element, currentLang);
        });
    }
}

// Show subscription management
function showSubscriptionManagement() {
    const modal = document.getElementById('manage-modal');
    if (modal) {
        // Load current user data into modal
        if (auth.currentUser) {
            const userId = auth.currentUser.uid;
            db.collection('users').doc(userId).get()
                .then(doc => {
                    if (doc.exists) {
                        const userData = doc.data();
                        const subscriptionType = userData.subscription || 'trial';
                        
                        document.getElementById('modal-plan-name').textContent = 
                            subscriptionType === 'trial' ? 'Free Trial' : 'Premium';
                        
                        document.getElementById('modal-plan-description').textContent = 
                            subscriptionType === 'trial' ? '7-day free trial active' : 'Premium subscription active';
                        
                        if (userData.trialActive && userData.trialEnd) {
                            const trialEnd = userData.trialEnd.toDate();
                            const now = new Date();
                            const daysLeft = Math.ceil((trialEnd - now) / (1000 * 60 * 60 * 24));
                            
                            if (daysLeft > 0) {
                                document.getElementById('modal-plan-status').textContent = `${daysLeft} days left`;
                            } else {
                                document.getElementById('modal-plan-status').textContent = 'Expired';
                            }
                        } else {
                            document.getElementById('modal-plan-status').textContent = 'Active';
                        }
                    }
                })
                .catch(error => {
                    console.error('Error loading user data for modal:', error);
                });
        }
        
        modal.style.display = 'flex';
        // Apply translations
        const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
        modal.querySelectorAll('[data-i18n]').forEach(element => {
            translateElement(element, currentLang);
        });
    }
}

// Close upgrade modal
function closeUpgradeModal() {
    const modal = document.getElementById('upgrade-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close manage modal
function closeManageModal() {
    const modal = document.getElementById('manage-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Show upgrade modal from manage modal
function showUpgradeModal() {
    closeManageModal();
    showUpgradeOptions();
}

// Upgrade to specific plan
function upgradeToPlan(plan) {
    // Redirect to PayPal with the specific plan
    const planUrls = {
        'monthly': 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=gascagtz@gmail.com&lc=MX&item_name=Monthly%20Subscription%20HablaYa!&a3=499.00&p3=1&t3=M&src=1&currency_code=MXN',
        'annual': 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=gascagtz@gmail.com&lc=MX&item_name=Annual%20Subscription%20HablaYa!&a3=4990.00&p3=1&t3=Y&src=1&currency_code=MXN'
    };
    
    if (planUrls[plan]) {
        window.open(planUrls[plan], '_blank');
        closeUpgradeModal();
    }
}

// Cancel subscription
function cancelSubscription() {
    if (confirm('Are you sure you want to cancel your subscription? You will lose access to premium features at the end of your current billing period.')) {
        alert('Subscription cancellation request sent. You will receive a confirmation email shortly.');
        closeManageModal();
    }
}

// Download invoice
function downloadInvoice() {
    alert('Invoice download feature coming soon!');
}

// Activate trial
function activateTrial() {
    if (!auth.currentUser) {
        alert('Please log in to activate trial');
        return;
    }
    
    const userId = auth.currentUser.uid;
    const trialEnd = new Date();
    trialEnd.setDate(trialEnd.getDate() + 7); // 7-day trial
    
    db.collection('users').doc(userId).update({
        trialActive: true,
        trialEnd: firebase.firestore.Timestamp.fromDate(trialEnd),
        trialUsed: true,
        subscription: 'trial'
    }).then(() => {
        alert('Trial activated successfully!');
        loadUserData(); // Refresh dashboard data
    }).catch(error => {
        console.error('Error activating trial:', error);
        alert('Error activating trial. Please try again.');
    });
}

// Test dashboard function for debugging
function testDashboard() {
    console.log('Testing dashboard display...');
    const mockUser = {
        uid: 'test-user-123',
        email: 'test@example.com',
        displayName: 'Test User'
    };
    showDashboard(mockUser);
}

// Start new session function
function startNewSession(language) {
    console.log('Starting new session for language:', language);
    
    if (!auth.currentUser) {
        alert('Please log in to start a session');
        return;
    }
    
    // Create session record in Firestore
    const userId = auth.currentUser.uid;
    db.collection('users').doc(userId).collection('sessions').add({
        language: language,
        startTime: firebase.firestore.FieldValue.serverTimestamp(),
        status: 'active'
    })
    .then(docRef => {
        // Open practice window
        const url = 'https://hablayalanguagetutor.vercel.app/';
        const newWindow = window.open(url, '_blank');
        
        if (newWindow) {
            // Track if window is closed to mark session as completed
            const checkWindowClosed = setInterval(() => {
                if (newWindow.closed) {
                    clearInterval(checkWindowClosed);
                    db.collection('users').doc(userId)
                        .collection('sessions').doc(docRef.id).update({
                            endTime: firebase.firestore.FieldValue.serverTimestamp(),
                            status: 'completed'
                        });
                }
            }, 1000);
        }
    })
    .catch(error => {
        console.error('Error starting session:', error);
        alert('Error starting session. Please try again.');
    });
}

// Show language selection modal
function showLanguageSelection() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('language-selection-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'language-selection-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3 data-i18n="selectLanguage">Select Language to Practice</h3>
                    <button class="close-modal" onclick="closeLanguageModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="language-grid">
                        <button class="language-option" onclick="startNewSession('english')">
                            <span class="flag">🇺🇸</span>
                            <span class="lang-name">English</span>
                        </button>
                        <button class="language-option" onclick="startNewSession('spanish')">
                            <span class="flag">🇪🇸</span>
                            <span class="lang-name">Español</span>
                        </button>
                        <button class="language-option" onclick="startNewSession('portuguese')">
                            <span class="flag">🇧🇷</span>
                            <span class="lang-name">Português</span>
                        </button>
                        <button class="language-option" onclick="startNewSession('french')">
                            <span class="flag">🇫🇷</span>
                            <span class="lang-name">Français</span>
                        </button>
                        <button class="language-option" onclick="startNewSession('italian')">
                            <span class="flag">🇮🇹</span>
                            <span class="lang-name">Italiano</span>
                        </button>
                        <button class="language-option all-languages" onclick="startNewSession('all')">
                            <span class="flag">🌍</span>
                            <span class="lang-name">All Languages</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Apply translations to the modal
        const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
        modal.querySelectorAll('[data-i18n]').forEach(element => {
            translateElement(element, currentLang);
        });
    }
    
    modal.style.display = 'flex';
}

// Close language selection modal
function closeLanguageModal() {
    const modal = document.getElementById('language-selection-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}
