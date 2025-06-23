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
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Firebase
    initializeFirebase();
    
    // Set up event listeners
    setupEventListeners();
    
    // Update pricing section with centralized configuration
    updatePricingSection();
    
    // Check for saved theme and language (default to Spanish)
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'es';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateLanguage(savedLang);
    
    // Check for saved currency
    const savedCurrency = localStorage.getItem('selectedCurrency') || 'MXN';
    updateCurrency(savedCurrency);
    
    // Update theme icon
    updateThemeIcon();
    
    // Initialize language and currency selectors
    initializeSelectors();
    
    // Check and show promotional banner
    checkPromoBanner();
});

// Initialize language and currency selectors
function initializeSelectors() {
    const languageSelect = document.getElementById('language-select');
    const currencySelect = document.getElementById('currency-select');
    
    if (languageSelect) {
        const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
        languageSelect.value = currentLang;
    }
    
    if (currencySelect) {
        const currentCurrency = localStorage.getItem('selectedCurrency') || 'MXN';
        currencySelect.value = currentCurrency;
    }
}

// Language switching function
function changeLanguage(lang) {
    updateLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update selector if it exists
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = lang;
    }
}

// Currency switching function
function changeCurrency(currency) {
    updateCurrency(currency);
    localStorage.setItem('selectedCurrency', currency);
    
    // Update selector if it exists
    const currencySelect = document.getElementById('currency-select');
    if (currencySelect) {
        currencySelect.value = currency;
    }
    
    // Update pricing section with new currency
    if (window.PRICING_CONFIG) {
        updatePricingSection();
    }
}

// Update currency display
function updateCurrency(currency) {
    // Update currency symbol in pricing config
    if (window.PRICING_CONFIG) {
        PRICING_CONFIG.currency = currency;
    }
    
    // Update all price displays
    updateAllPriceDisplays();
}

// Update all price displays with current currency
function updateAllPriceDisplays() {
    if (!window.PRICING_CONFIG) return;
    
    // Update pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        const planKey = card.getAttribute('data-plan');
        if (planKey && PRICING_CONFIG.plans[planKey]) {
            const plan = PRICING_CONFIG.plans[planKey];
            const currentPrice = card.querySelector('.current-price');
            const originalPrice = card.querySelector('.original-price');
            
            if (currentPrice) {
                currentPrice.textContent = PRICING_CONFIG.formatPrice(plan.price);
            }
            
            if (originalPrice && plan.originalPrice) {
                originalPrice.textContent = PRICING_CONFIG.formatPrice(plan.originalPrice);
            }
        }
    });
    
    // Update upgrade plans
    document.querySelectorAll('.upgrade-plan').forEach(plan => {
        const planKey = plan.getAttribute('data-plan');
        if (planKey && PRICING_CONFIG.plans[planKey]) {
            const planData = PRICING_CONFIG.plans[planKey];
            const priceElement = plan.querySelector('.price');
            
            if (priceElement) {
                priceElement.textContent = PRICING_CONFIG.formatPrice(planData.price);
            }
        }
    });
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

// Theme toggle function
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
}

// Language toggle function
function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
    const newLang = currentLang === 'es' ? 'en' : (currentLang === 'en' ? 'pt' : 'es');
    updateLanguage(newLang);
}

// Update theme icon
function updateThemeIcon() {
    const themeToggle = document.getElementById('theme-toggle');
    const isDark = document.documentElement.classList.contains('dark-theme');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

function updateLanguage(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        translateElement(element, lang);
    });
    
    // Update language flags
    updateLanguageFlags();
    
    // Update pricing section with new language
    if (window.PRICING_CONFIG) {
        updatePricingSection();
    }
    
    // Update chatbot language if available
    if (window.chatbotConfig) {
        chatbotConfig.currentLanguage = lang;
    }
}

function translateElement(element, lang) {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' && element.type === 'submit') {
            element.value = translations[lang][key];
        } else {
            element.textContent = translations[lang][key];
        }
    }
}

// Update language flags
function updateLanguageFlags() {
    const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
    const langFlags = {
        es: '🇲🇽',
        en: '🇺🇸',
        pt: '🇧🇷'
    };
    const langTexts = {
        es: 'ES',
        en: 'EN',
        pt: 'PT'
    };
    
    const flags = document.querySelectorAll('.lang-flag');
    const texts = document.querySelectorAll('.lang-text');
    
    flags.forEach(flag => {
        flag.textContent = langFlags[currentLang] || langFlags.es;
    });
    
    texts.forEach(text => {
        text.textContent = langTexts[currentLang] || langTexts.es;
    });
}

function showDashboard(user) {
    // Hide main content and show dashboard
    document.querySelector('.app-container').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    
    // Update user info
    document.getElementById('user-name').textContent = user.displayName || user.email.split('@')[0];
    document.getElementById('user-email').textContent = user.email;
    
    // Load user data from Firestore
    db.collection('users').doc(user.uid).get()
        .then(doc => {
            if (doc.exists) {
                const userData = doc.data();
                
                // Update session counts
                updateSessionCounts(user.uid);
                
                // Update trial status
                updateTrialUI(userData);
                
                // Load session history
                loadSessionHistory(user.uid);
                
                // Load billing history
                loadBillingHistory(user.uid);
                
                // Update last login
                updateUserLastLogin(user.uid);
                
                // Auto-activate trial if user hasn't used it yet
                if (!userData.trialUsed && !userData.trialActive) {
                    activateTrial();
                }
            } else {
                // Create new user document
                db.collection('users').doc(user.uid).set({
                    email: user.email,
                    name: user.displayName || user.email.split('@')[0],
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
                    subscription: 'free',
                    trialActive: false,
                    trialUsed: false,
                    englishSessions: 0,
                    spanishSessions: 0,
                    portugueseSessions: 0,
                    totalSessions: 0,
                    currentLevel: 'A1'
                })
                .then(() => {
                    // Auto-activate trial for new users
                    activateTrial();
                })
                .catch(error => {
                    console.error('Error creating user document:', error);
                });
            }
        })
        .catch(error => {
            console.error('Error loading user data:', error);
        });
}

function hideDashboard() {
    // Show main app and hide dashboard
    document.getElementById('app-container').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    
    // Close all modals
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

function startNewSession(language) {
    const user = auth.currentUser;
    if (!user) {
        alert('Please log in to start a session.');
        return;
    }

    // Check user access before starting session
    checkUserAccess(user.uid).then(accessResult => {
        if (!accessResult.canAccess) {
            // Show upgrade modal if user doesn't have access
            showUpgradeOptions();
            return;
        }

        // User has access, proceed with session
        const sessionBtn = document.getElementById('start-chatbot');
        const originalText = sessionBtn.innerHTML;
        sessionBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Starting...';
        sessionBtn.disabled = true;

        // Record the session start
        const sessionData = {
            language: 'all',
            startTime: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'active'
        };
        
        db.collection('users').doc(user.uid).collection('sessions').add(sessionData)
            .then(docRef => {
                // Open the chatbot in a new tab
                const url = 'https://hablayalanguagetutor.vercel.app/';
                const newWindow = window.open(url, '_blank');
                
                // Check if the window was successfully opened
                if (newWindow) {
                    // Listen for window closing to record session end
                    const checkWindowClosed = setInterval(() => {
                        if (newWindow.closed) {
                            clearInterval(checkWindowClosed);
                            endSession(user.uid, docRef.id);
                        }
                    }, 1000);
                } else {
                    // If popup was blocked, end the session immediately
                    endSession(user.uid, docRef.id);
                    alert('Please allow popups to track your session duration.');
                }
            })
            .catch(error => {
                console.error('Error starting session:', error);
                alert('Error starting session. Please try again.');
            })
            .finally(() => {
                // Restore button state
                sessionBtn.innerHTML = originalText;
                sessionBtn.disabled = false;
            });
    }).catch(error => {
        console.error('Error checking user access:', error);
        alert('Error checking access. Please try again.');
    });
}

// Function to check user access using Firebase Functions
async function checkUserAccess(userId) {
    try {
        // Call the Firebase Function to check user access
        const checkUserAccessFunction = firebase.functions().httpsCallable('checkUserAccess');
        const result = await checkUserAccessFunction();
        return result.data;
    } catch (error) {
        console.error('Error calling checkUserAccess function:', error);
        // Fallback: check locally
        const userDoc = await db.collection('users').doc(userId).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
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
        }
        return { canAccess: false };
    }
}

function endSession(userId, sessionId) {
    db.collection('users').doc(userId).collection('sessions').doc(sessionId).update({
        endTime: firebase.firestore.FieldValue.serverTimestamp(),
        status: 'completed'
    })
    .then(() => {
        // Update session counts
        updateSessionCounts(userId);
        // Refresh session history
        loadSessionHistory(userId);
    })
    .catch(error => {
        console.error('Error ending session:', error);
    });
}

function updateSessionCounts(userId) {
    // Increment the appropriate session counter
    const userRef = db.collection('users').doc(userId);
    
    // For simplicity, we'll increment the counter without checking which language
    // In a real app, you'd want to track which language was used
    userRef.update({
        englishSessions: firebase.firestore.FieldValue.increment(1),
        lastSession: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        // Update the UI
        const englishCount = document.getElementById('english-count');
        englishCount.textContent = parseInt(englishCount.textContent) + 1;
        
        const totalCount = document.getElementById('total-count');
        totalCount.textContent = parseInt(totalCount.textContent) + 1;
    });
}

function loadSessionHistory(userId) {
    const sessionList = document.getElementById('session-list');
    sessionList.innerHTML = '<div class="loading"><div class="loading-spinner"></div></div>';
    
    db.collection('users').doc(userId).collection('sessions')
        .orderBy('startTime', 'desc')
        .limit(10)
        .get()
        .then(querySnapshot => {
            sessionList.innerHTML = '';
            
            if (querySnapshot.empty) {
                sessionList.innerHTML = '<div class="empty-sessions">No sessions yet. Start your first session!</div>';
                return;
            }
            
            querySnapshot.forEach(doc => {
                const sessionData = doc.data();
                const sessionItem = document.createElement('div');
                sessionItem.className = 'session-item';
                
                // Calculate duration if session is completed
                let durationText = 'In progress';
                if (sessionData.endTime && sessionData.startTime) {
                    const duration = (sessionData.endTime.toDate() - sessionData.startTime.toDate()) / 1000 / 60; // in minutes
                    durationText = `${Math.round(duration)} min`;
                }
                
                // Format date
                const sessionDate = sessionData.startTime ? 
                    sessionData.startTime.toDate().toLocaleString() : 'Just now';
                
                // Determine language display text
                let languageText = 'Language Practice';
                
                sessionItem.innerHTML = `
                    <div class="session-info">
                        <span class="session-language">${languageText}</span>
                        <span class="session-date">${sessionDate}</span>
                    </div>
                    <div class="session-duration">${durationText}</div>
                `;
                
                sessionList.appendChild(sessionItem);
            });
        })
        .catch(error => {
            console.error('Error loading session history:', error);
            sessionList.innerHTML = '<div class="empty-sessions">Error loading sessions. Please try again.</div>';
        });
}

function updateUserLastLogin(userId) {
    db.collection('users').doc(userId).update({
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    });
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('hablaya-theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Check for saved language preference
const savedLang = localStorage.getItem('hablaya-lang');
if (savedLang) {
    document.documentElement.setAttribute('data-lang', savedLang);
    updateLanguage(savedLang);
    updateLanguageFlags();
}

// Trial system functions
function activateTrial() {
    const user = auth.currentUser;
    if (!user) return;
    
    const trialEnd = new Date();
    trialEnd.setDate(trialEnd.getDate() + 7);
    
    // Show loading state
    const trialStatus = document.getElementById('trial-status');
    const originalText = trialStatus.textContent;
    trialStatus.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Activating...';
    
    db.collection('users').doc(user.uid).update({
        trialActive: true,
        trialEnd: firebase.firestore.Timestamp.fromDate(trialEnd),
        trialUsed: true,
        subscription: 'trial'
    })
    .then(() => {
        // Show success message
        const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
        const isSpanish = currentLang === 'es';
        
        // Create success notification
        const notification = document.createElement('div');
        notification.className = 'trial-notification success';
        notification.innerHTML = `
            <div style="position: fixed; top: 20px; right: 20px; background: var(--success-bg); color: var(--success-color); padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); z-index: 10001; display: flex; align-items: center; gap: 0.5rem; border: 1px solid var(--success-color);">
                <i class="fas fa-check-circle"></i>
                <span>${isSpanish ? '¡Prueba gratis activada! 7 días de acceso completo.' : 'Free trial activated! 7 days of full access.'}</span>
            </div>
        `;
        document.body.appendChild(notification);
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
        
        // Refresh dashboard to show updated trial status
        showDashboard(user);
    })
    .catch(error => {
        console.error('Error activating trial:', error);
        
        // Show error message
        const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
        const isSpanish = currentLang === 'es';
        
        const notification = document.createElement('div');
        notification.className = 'trial-notification error';
        notification.innerHTML = `
            <div style="position: fixed; top: 20px; right: 20px; background: var(--error-bg); color: var(--error-color); padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); z-index: 10001; display: flex; align-items: center; gap: 0.5rem; border: 1px solid var(--error-color);">
                <i class="fas fa-exclamation-triangle"></i>
                <span>${isSpanish ? 'Error al activar la prueba. Inténtalo de nuevo.' : 'Error activating trial. Please try again.'}</span>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
        
        // Restore original text
        trialStatus.textContent = originalText;
    });
}

function checkTrialStatus(userData) {
    if (!userData.trialActive || !userData.trialEnd) return 'no-trial';
    
    const now = new Date();
    const trialEnd = userData.trialEnd.toDate();
    
    if (now > trialEnd) {
        return 'expired';
    } else {
        const daysLeft = Math.ceil((trialEnd - now) / (1000 * 60 * 60 * 24));
        return { status: 'active', daysLeft };
    }
}

function showUpgradeOptions() {
    // Create and show upgrade modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'upgrade-modal';
    
    const currentLang = PRICING_CONFIG.getCurrentLanguage();
    const isSpanish = currentLang === 'es';
    const isPortuguese = currentLang === 'pt';
    
    modal.innerHTML = `
        <div class="modal-content upgrade-modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-icon"><i class="fas fa-crown"></i></div>
            <h3>${PRICING_CONFIG.getText({
                en: 'Upgrade to Premium',
                es: 'Actualizar a Premium',
                pt: 'Atualizar para Premium'
            })}</h3>
            <p>${PRICING_CONFIG.getText({
                en: 'Choose the plan that best fits your needs',
                es: 'Elige el plan que mejor se adapte a tus necesidades',
                pt: 'Escolha o plano que melhor atende às suas necessidades'
            })}</p>
            
            <div class="upgrade-plans">
                <div class="upgrade-plan">
                    <div class="plan-header">
                        <h4>${PRICING_CONFIG.getText(PRICING_CONFIG.plans.monthly.name)}</h4>
                        <div class="plan-price">
                            <span class="price">${PRICING_CONFIG.formatPrice(PRICING_CONFIG.plans.monthly.price)}</span>
                            <span class="period">${PRICING_CONFIG.getText(PRICING_CONFIG.plans.monthly.period)}</span>
                        </div>
                    </div>
                    <ul class="plan-features">
                        ${PRICING_CONFIG.plans.monthly.features.map(feature => 
                            `<li><i class="fas fa-check"></i> ${PRICING_CONFIG.getText(feature)}</li>`
                        ).join('')}
                    </ul>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" class="paypal-form">
                        <input type="hidden" name="cmd" value="${PRICING_CONFIG.plans.monthly.paypalCmd}">
                        <input type="hidden" name="business" value="${PRICING_CONFIG.paypalBusiness}">
                        <input type="hidden" name="lc" value="MX">
                        <input type="hidden" name="item_name" value="${PRICING_CONFIG.plans.monthly.paypalItemName}">
                        <input type="hidden" name="a3" value="${PRICING_CONFIG.plans.monthly.price.toFixed(2)}">
                        <input type="hidden" name="p3" value="${PRICING_CONFIG.plans.monthly.paypalParams.p3}">
                        <input type="hidden" name="t3" value="${PRICING_CONFIG.plans.monthly.paypalParams.t3}">
                        <input type="hidden" name="src" value="${PRICING_CONFIG.plans.monthly.paypalParams.src}">
                        <input type="hidden" name="currency_code" value="${PRICING_CONFIG.currency}">
                        <input type="hidden" name="custom" value="${auth.currentUser ? auth.currentUser.uid : ''}">
                        <button type="submit" class="btn primary">${PRICING_CONFIG.getText({
                            en: 'Get Monthly Plan',
                            es: 'Obtener Plan Mensual',
                            pt: 'Obter Plano Mensal'
                        })}</button>
                    </form>
                </div>
                
                <div class="upgrade-plan popular">
                    <div class="popular-badge">${PRICING_CONFIG.getText({
                        en: 'Most Popular',
                        es: 'Más Popular',
                        pt: 'Mais Popular'
                    })}</div>
                    <div class="plan-header">
                        <h4>${PRICING_CONFIG.getText(PRICING_CONFIG.plans.annual.name)}</h4>
                        <div class="plan-price">
                            <span class="price">${PRICING_CONFIG.formatPrice(PRICING_CONFIG.plans.annual.price)}</span>
                            <span class="period">${PRICING_CONFIG.getText({
                                en: '/year',
                                es: '/año',
                                pt: '/ano'
                            })}</span>
                        </div>
                        <div class="save-badge">${PRICING_CONFIG.getText(PRICING_CONFIG.plans.annual.discount)}</div>
                    </div>
                    <ul class="plan-features">
                        ${PRICING_CONFIG.plans.annual.features.map(feature => 
                            `<li><i class="fas fa-check"></i> ${PRICING_CONFIG.getText(feature)}</li>`
                        ).join('')}
                    </ul>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" class="paypal-form">
                        <input type="hidden" name="cmd" value="${PRICING_CONFIG.plans.annual.paypalCmd}">
                        <input type="hidden" name="business" value="${PRICING_CONFIG.paypalBusiness}">
                        <input type="hidden" name="lc" value="MX">
                        <input type="hidden" name="item_name" value="${PRICING_CONFIG.plans.annual.paypalItemName}">
                        <input type="hidden" name="a3" value="${PRICING_CONFIG.plans.annual.price.toFixed(2)}">
                        <input type="hidden" name="p3" value="${PRICING_CONFIG.plans.annual.paypalParams.p3}">
                        <input type="hidden" name="t3" value="${PRICING_CONFIG.plans.annual.paypalParams.t3}">
                        <input type="hidden" name="src" value="${PRICING_CONFIG.plans.annual.paypalParams.src}">
                        <input type="hidden" name="currency_code" value="${PRICING_CONFIG.currency}">
                        <input type="hidden" name="custom" value="${auth.currentUser ? auth.currentUser.uid : ''}">
                        <button type="submit" class="btn primary">${PRICING_CONFIG.getText({
                            en: 'Get Annual Plan',
                            es: 'Obtener Plan Anual',
                            pt: 'Obter Plano Anual'
                        })}</button>
                    </form>
                </div>
            </div>
            
            <div class="upgrade-footer">
                <p><i class="fas fa-shield-alt"></i> ${PRICING_CONFIG.getText(PRICING_CONFIG.securePayment)}</p>
                <p><i class="fas fa-undo"></i> ${PRICING_CONFIG.getText(PRICING_CONFIG.moneyBackGuarantee)}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.remove();
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

function showSubscriptionManagement() {
    // Create and show subscription management modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'subscription-modal';
    
    const currentLang = PRICING_CONFIG.getCurrentLanguage();
    const isSpanish = currentLang === 'es';
    const isPortuguese = currentLang === 'pt';
    
    modal.innerHTML = `
        <div class="modal-content subscription-modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-icon"><i class="fas fa-credit-card"></i></div>
            <h3>${PRICING_CONFIG.getText({
                en: 'Subscription Management',
                es: 'Gestión de Suscripción',
                pt: 'Gerenciamento de Assinatura'
            })}</h3>
            
            <div class="subscription-info">
                <div class="current-subscription">
                    <h4>${PRICING_CONFIG.getText({
                        en: 'Current Subscription',
                        es: 'Suscripción Actual',
                        pt: 'Assinatura Atual'
                    })}</h4>
                    <div class="subscription-details" id="current-subscription-details">
                        <div class="loading">${PRICING_CONFIG.getText({
                            en: 'Loading...',
                            es: 'Cargando...',
                            pt: 'Carregando...'
                        })}</div>
                    </div>
                </div>
                
                <div class="subscription-actions">
                    <h4>${PRICING_CONFIG.getText({
                        en: 'Actions',
                        es: 'Acciones',
                        pt: 'Ações'
                    })}</h4>
                    <div class="action-buttons">
                        <button class="btn primary" onclick="showUpgradeOptions()">
                            <i class="fas fa-arrow-up"></i> ${PRICING_CONFIG.getText({
                                en: 'Upgrade Plan',
                                es: 'Actualizar Plan',
                                pt: 'Atualizar Plano'
                            })}
                        </button>
                        <button class="btn secondary" onclick="cancelSubscription()">
                            <i class="fas fa-times"></i> ${PRICING_CONFIG.getText({
                                en: 'Cancel Subscription',
                                es: 'Cancelar Suscripción',
                                pt: 'Cancelar Assinatura'
                            })}
                        </button>
                        <button class="btn secondary" onclick="downloadInvoice()">
                            <i class="fas fa-download"></i> ${PRICING_CONFIG.getText({
                                en: 'Download Invoice',
                                es: 'Descargar Factura',
                                pt: 'Baixar Fatura'
                            })}
                        </button>
                    </div>
                </div>
                
                <div class="billing-history">
                    <h4>${PRICING_CONFIG.getText({
                        en: 'Billing History',
                        es: 'Historial de Facturación',
                        pt: 'Histórico de Cobrança'
                    })}</h4>
                    <div class="billing-list" id="modal-billing-list">
                        <div class="loading">${PRICING_CONFIG.getText({
                            en: 'Loading...',
                            es: 'Cargando...',
                            pt: 'Carregando...'
                        })}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Load subscription data
    loadSubscriptionData();
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.remove();
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

function loadSubscriptionData() {
    const user = auth.currentUser;
    if (!user) return;
    
    // Load current subscription details
    db.collection('users').doc(user.uid).get()
        .then(doc => {
            if (doc.exists) {
                const userData = doc.data();
                const subscriptionDetails = document.getElementById('current-subscription-details');
                
                let subscriptionText = '';
                if (userData.subscription === 'trial') {
                    const trialInfo = checkTrialStatus(userData);
                    if (trialInfo === 'expired') {
                        subscriptionText = `<div class="subscription-status expired">
                            <i class="fas fa-times-circle"></i>
                            <span>${document.documentElement.getAttribute('data-lang') === 'es' ? 'Prueba Expirada' : 'Trial Expired'}</span>
                        </div>`;
                    } else if (trialInfo.status === 'active') {
                        subscriptionText = `<div class="subscription-status active">
                            <i class="fas fa-clock"></i>
                            <span>${document.documentElement.getAttribute('data-lang') === 'es' ? 'Prueba Gratis' : 'Free Trial'} - ${trialInfo.daysLeft} ${document.documentElement.getAttribute('data-lang') === 'es' ? 'días restantes' : 'days left'}</span>
                        </div>`;
                    }
                } else if (userData.subscription === 'premium') {
                    subscriptionText = `<div class="subscription-status premium">
                        <i class="fas fa-crown"></i>
                        <span>${document.documentElement.getAttribute('data-lang') === 'es' ? 'Plan Premium Activo' : 'Premium Plan Active'}</span>
                    </div>`;
                } else {
                    subscriptionText = `<div class="subscription-status free">
                        <i class="fas fa-user"></i>
                        <span>${document.documentElement.getAttribute('data-lang') === 'es' ? 'Plan Gratis' : 'Free Plan'}</span>
                    </div>`;
                }
                
                subscriptionDetails.innerHTML = subscriptionText;
            }
        })
        .catch(error => {
            console.error('Error loading subscription data:', error);
        });
    
    // Load billing history
    loadModalBillingHistory(user.uid);
}

function loadModalBillingHistory(userId) {
    const billingList = document.getElementById('modal-billing-list');
    
    db.collection('users').doc(userId).collection('transactions')
        .orderBy('date', 'desc')
        .limit(10)
        .get()
        .then(querySnapshot => {
            billingList.innerHTML = '';
            
            if (querySnapshot.empty) {
                billingList.innerHTML = `
                    <div class="billing-item empty">
                        <i class="fas fa-receipt"></i>
                        <span>${document.documentElement.getAttribute('data-lang') === 'es' ? 'No hay transacciones aún' : 'No transactions yet'}</span>
                    </div>
                `;
                return;
            }
            
            querySnapshot.forEach(doc => {
                const transaction = doc.data();
                const billingItem = document.createElement('div');
                billingItem.className = 'billing-item';
                
                const date = transaction.date ? transaction.date.toDate().toLocaleDateString() : 'Unknown';
                const amount = transaction.amount ? `$${transaction.amount} MXN` : '-';
                const status = transaction.status || 'completed';
                
                billingItem.innerHTML = `
                    <div class="billing-info">
                        <span class="billing-description">${transaction.description || 'Subscription'}</span>
                        <span class="billing-date">${date}</span>
                    </div>
                    <div class="billing-amount">
                        <span class="amount">${amount}</span>
                        <span class="status ${status}">${status}</span>
                    </div>
                `;
                
                billingList.appendChild(billingItem);
            });
        })
        .catch(error => {
            console.error('Error loading billing history:', error);
            billingList.innerHTML = `
                <div class="billing-item error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>${document.documentElement.getAttribute('data-lang') === 'es' ? 'Error al cargar transacciones' : 'Error loading transactions'}</span>
                </div>
            `;
        });
}

function cancelSubscription() {
    const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
    const isSpanish = currentLang === 'es';
    
    if (confirm(isSpanish ? 
        '¿Estás seguro de que quieres cancelar tu suscripción? Esto entrará en efecto al final del período de facturación actual.' :
        'Are you sure you want to cancel your subscription? This will take effect at the end of your current billing period.')) {
        
        // Here you would typically call PayPal's subscription cancellation API
        // For now, we'll just show a message
        alert(isSpanish ? 
            'Para cancelar tu suscripción, por favor contacta a soporte@hablaya.com o cancela directamente desde tu cuenta de PayPal.' :
            'To cancel your subscription, please contact support@hablaya.com or cancel directly from your PayPal account.');
    }
}

function downloadInvoice() {
    const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
    const isSpanish = currentLang === 'es';
    
    alert(isSpanish ? 
        'Las facturas están disponibles en tu cuenta de PayPal. También puedes contactar a soporte@hablaya.com para obtener una copia.' :
        'Invoices are available in your PayPal account. You can also contact support@hablaya.com to get a copy.');
}

function updateTrialUI(userData) {
    const trialStatus = document.getElementById('trial-status');
    const planBadge = document.getElementById('plan-badge');
    const planDetails = document.getElementById('plan-details');
    const trialExpiry = document.getElementById('trial-expiry');
    const upgradeBtn = document.querySelector('.upgrade-btn');
    
    const trialInfo = checkTrialStatus(userData);
    
    if (trialInfo === 'no-trial') {
        trialStatus.textContent = 'No Trial';
        planBadge.textContent = 'Free';
        planBadge.className = 'plan-badge';
        planDetails.textContent = 'No active trial';
        trialExpiry.textContent = 'N/A';
        upgradeBtn.textContent = 'Start Trial';
    } else if (trialInfo === 'expired') {
        trialStatus.textContent = 'Expired';
        planBadge.textContent = 'Trial Expired';
        planBadge.className = 'plan-badge trial';
        planDetails.textContent = 'Your trial has expired';
        trialExpiry.textContent = 'Expired';
        upgradeBtn.textContent = 'Upgrade Now';
    } else {
        trialStatus.textContent = `${trialInfo.daysLeft} days left`;
        planBadge.textContent = 'Free Trial';
        planBadge.className = 'plan-badge trial';
        planDetails.textContent = '7-day free trial active';
        
        const expiryDate = userData.trialEnd.toDate().toLocaleDateString();
        trialExpiry.textContent = expiryDate;
        upgradeBtn.textContent = 'Upgrade Now';
    }
}

function loadBillingHistory(userId) {
    const billingList = document.getElementById('billing-list');
    
    db.collection('users').doc(userId).collection('transactions')
        .orderBy('date', 'desc')
        .limit(5)
        .get()
        .then(querySnapshot => {
            billingList.innerHTML = '';
            
            if (querySnapshot.empty) {
                billingList.innerHTML = `
                    <div class="billing-item">
                        <span class="billing-date">No transactions yet</span>
                        <span class="billing-amount">-</span>
                    </div>
                `;
                return;
            }
            
            querySnapshot.forEach(doc => {
                const transaction = doc.data();
                const billingItem = document.createElement('div');
                billingItem.className = 'billing-item';
                
                const date = transaction.date ? transaction.date.toDate().toLocaleDateString() : 'Unknown';
                const amount = transaction.amount ? `$${transaction.amount} MXN` : '-';
                
                billingItem.innerHTML = `
                    <span class="billing-date">${transaction.description || 'Subscription'}</span>
                    <span class="billing-amount">${amount}</span>
                `;
                
                billingList.appendChild(billingItem);
            });
        })
        .catch(error => {
            console.error('Error loading billing history:', error);
            billingList.innerHTML = `
                <div class="billing-item">
                    <span class="billing-date">Error loading transactions</span>
                    <span class="billing-amount">-</span>
                </div>
            `;
        });
}

function setPayPalUserId(user) {
    document.querySelectorAll('#paypal-custom-userid').forEach(input => {
        input.value = user.uid;
    });
}

// Function to update pricing section with centralized configuration
function updatePricingSection() {
    // Update pricing cards with centralized config
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        const planKey = card.getAttribute('data-plan');
        if (!planKey || !PRICING_CONFIG.plans[planKey]) return;
        
        const plan = PRICING_CONFIG.plans[planKey];
        const currentLang = PRICING_CONFIG.getCurrentLanguage();
        const currentCurrency = PRICING_CONFIG.getCurrentCurrency();
        
        // Update plan name
        const planName = card.querySelector('h3');
        if (planName) {
            planName.textContent = PRICING_CONFIG.getText(plan.name);
        }
        
        // Update pricing with currency conversion
        const currentPrice = card.querySelector('.current-price');
        const originalPrice = card.querySelector('.original-price');
        const priceSubtitle = card.querySelector('.price-subtitle');
        
        if (currentPrice) {
            currentPrice.textContent = PRICING_CONFIG.formatPrice(plan.price, currentCurrency);
        }
        
        if (originalPrice && plan.originalPrice) {
            originalPrice.textContent = PRICING_CONFIG.formatPrice(plan.originalPrice, currentCurrency);
        }
        
        if (priceSubtitle) {
            const periodText = PRICING_CONFIG.getText(plan.period);
            const discountText = plan.discount ? PRICING_CONFIG.getText(plan.discount) : '';
            priceSubtitle.innerHTML = `${periodText} ${discountText ? `<span class="discount">${discountText}</span>` : ''}`;
        }
        
        // Update features
        const featuresList = card.querySelector('.price-features');
        if (featuresList && plan.features) {
            featuresList.innerHTML = plan.features.map(feature => 
                `<li><i class="fas fa-check"></i> ${PRICING_CONFIG.getText(feature)}</li>`
            ).join('');
        }
        
        // Update badge
        const badge = card.querySelector('.pricing-badge');
        if (badge && plan.badge) {
            badge.textContent = PRICING_CONFIG.getText(plan.badge);
        }
        
        // Update PayPal form
        const paypalForm = card.querySelector('.paypal-form');
        if (paypalForm) {
            updatePayPalForm(paypalForm, planKey);
        }
    });
    
    // Update trial card
    const trialCard = document.querySelector('.trial-card');
    if (trialCard) {
        const trialPrice = trialCard.querySelector('.current-price');
        const trialOriginalPrice = trialCard.querySelector('.original-price');
        
        if (trialPrice) {
            trialPrice.textContent = PRICING_CONFIG.formatPrice(0, currentCurrency);
        }
        
        if (trialOriginalPrice) {
            trialOriginalPrice.textContent = PRICING_CONFIG.formatPrice(99, currentCurrency);
        }
    }
}

function updatePayPalForm(form, planKey) {
    const plan = PRICING_CONFIG.plans[planKey];
    if (!plan) return;
    
    const currentCurrency = PRICING_CONFIG.getCurrentCurrency();
    const convertedPrice = PRICING_CONFIG.convertPrice(plan.price, 'MXN', currentCurrency);
    
    // Clear existing inputs
    const existingInputs = form.querySelectorAll('input[type="hidden"]');
    existingInputs.forEach(input => {
        if (input.name !== 'custom') {
            input.remove();
        }
    });
    
    // Add new inputs based on centralized config
    const inputs = [
        { name: 'cmd', value: plan.paypalCmd || '_xclick' },
        { name: 'business', value: PRICING_CONFIG.paypalBusiness },
        { name: 'lc', value: currentCurrency === 'MXN' ? 'MX' : 'US' },
        { name: 'item_name', value: plan.paypalItemName },
        { name: 'currency_code', value: currentCurrency }
    ];
    
    // Add amount based on command type
    if (plan.paypalCmd === '_xclick-subscriptions') {
        inputs.push({ name: 'a3', value: convertedPrice.toFixed(2) });
        if (plan.paypalParams) {
            Object.entries(plan.paypalParams).forEach(([key, value]) => {
                if (key === 'a3') {
                    inputs.push({ name: key, value: convertedPrice.toFixed(2) });
                } else {
                    inputs.push({ name: key, value });
                }
            });
        }
    } else {
        inputs.push({ name: 'amount', value: convertedPrice.toFixed(2) });
    }
    
    // Add additional PayPal parameters
    inputs.push(
        { name: 'button_subtype', value: 'services' },
        { name: 'no_note', value: '0' },
        { name: 'bn', value: 'PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest' }
    );
    
    // Create and append input elements
    inputs.forEach(input => {
        const inputElement = document.createElement('input');
        inputElement.type = 'hidden';
        inputElement.name = input.name;
        inputElement.value = input.value;
        form.appendChild(inputElement);
    });
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
    
    // Intro page language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const langButtons = document.querySelectorAll('.lang-btn');
            const index = Array.from(langButtons).indexOf(this);
            const lang = ['es', 'en', 'pt'][index];
            changeLanguage(lang);
        });
    });
    
    // Language selector toggle button (if exists)
    const langSelectorToggle = document.getElementById('lang-selector-toggle');
    if (langSelectorToggle) {
        langSelectorToggle.addEventListener('click', toggleLanguageSelector);
    }
    
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
}

// Initialize the app
function initializeApp() {
    // Check if user has seen intro page
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    
    if (!hasSeenIntro) {
        // Show intro page first
        document.getElementById('intro-page').style.display = 'flex';
        document.getElementById('main-app').style.display = 'none';
    } else {
        // Show main app directly
        document.getElementById('intro-page').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
        initializeMainApp();
    }
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
