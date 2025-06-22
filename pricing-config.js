// Centralized Pricing Configuration for HablaYa!
// This file ensures consistent pricing across all components

window.PRICING_CONFIG = {
    // Currency settings
    currency: 'MXN',
    currencySymbol: '$',
    
    // PayPal business email
    paypalBusiness: 'gascagtz@gmail.com',
    
    // Pricing plans
    plans: {
        trial: {
            name: {
                en: '7-Day Free Trial',
                es: 'Prueba Gratis de 7 Días',
                pt: 'Teste Grátis de 7 Dias'
            },
            price: 0,
            originalPrice: 99,
            period: {
                en: '7 days free • No credit card required',
                es: '7 días gratis • Sin tarjeta de crédito',
                pt: '7 dias grátis • Sem cartão de crédito'
            },
            features: [
                { en: 'All 5 languages included', es: '5 idiomas incluidos', pt: '5 idiomas incluídos' },
                { en: 'A1 to C2 levels', es: 'Niveles A1 a C2', pt: 'Níveis A1 a C2' },
                { en: 'Speech recognition', es: 'Reconocimiento de voz', pt: 'Reconhecimento de voz' },
                { en: 'Progress tracking', es: 'Seguimiento de progreso', pt: 'Acompanhamento de progresso' },
                { en: 'Full access to all features', es: 'Acceso completo a todas las funciones', pt: 'Acesso completo a todos os recursos' }
            ],
            badge: {
                en: 'Free Trial',
                es: 'Prueba Gratis',
                pt: 'Teste Grátis'
            },
            note: {
                en: 'Cancel anytime during trial',
                es: 'Cancela cuando quieras durante la prueba',
                pt: 'Cancele a qualquer momento durante o teste'
            }
        },
        
        fiveYear: {
            name: {
                en: '5-Year Plan',
                es: 'Plan de 5 Años',
                pt: 'Plano de 5 Anos'
            },
            price: 4949,
            originalPrice: 7500,
            period: {
                en: 'for 5 years',
                es: 'por 5 años',
                pt: 'por 5 anos'
            },
            discount: {
                en: 'Save 34%',
                es: 'Ahorra 34%',
                pt: 'Economize 34%'
            },
            badge: {
                en: 'Best Value',
                es: 'Mejor Valor',
                pt: 'Melhor Valor'
            },
            features: [
                { en: 'All 5 languages included', es: '5 idiomas incluidos', pt: '5 idiomas incluídos' },
                { en: 'A1 to C2 levels', es: 'Niveles A1 a C2', pt: 'Níveis A1 a C2' },
                { en: 'Speech recognition', es: 'Reconocimiento de voz', pt: 'Reconhecimento de voz' },
                { en: 'Priority support', es: 'Soporte prioritario', pt: 'Suporte prioritário' },
                { en: 'Progress tracking', es: 'Seguimiento de progreso', pt: 'Acompanhamento de progresso' },
                { en: 'Advanced analytics', es: 'Analíticas avanzadas', pt: 'Analytics avançados' }
            ],
            paypalItemName: '5-Year Subscription HablaYa!',
            paypalCmd: '_xclick'
        },
        
        twoYear: {
            name: {
                en: '2-Year Plan',
                es: 'Plan de 2 Años',
                pt: 'Plano de 2 Anos'
            },
            price: 2499,
            originalPrice: 3000,
            period: {
                en: 'for 2 years',
                es: 'por 2 años',
                pt: 'por 2 anos'
            },
            discount: {
                en: 'Save 17%',
                es: 'Ahorra 17%',
                pt: 'Economize 17%'
            },
            badge: {
                en: 'Most Popular',
                es: 'Más Popular',
                pt: 'Mais Popular'
            },
            features: [
                { en: 'All 5 languages included', es: '5 idiomas incluidos', pt: '5 idiomas incluídos' },
                { en: 'A1 to C2 levels', es: 'Niveles A1 a C2', pt: 'Níveis A1 a C2' },
                { en: 'Speech recognition', es: 'Reconocimiento de voz', pt: 'Reconhecimento de voz' },
                { en: 'Standard support', es: 'Soporte estándar', pt: 'Suporte padrão' },
                { en: 'Progress tracking', es: 'Seguimiento de progreso', pt: 'Acompanhamento de progresso' }
            ],
            paypalItemName: '2-Year Subscription HablaYa!',
            paypalCmd: '_xclick'
        },
        
        annual: {
            name: {
                en: 'Annual Plan',
                es: 'Plan Anual',
                pt: 'Plano Anual'
            },
            price: 1999,
            originalPrice: 2250,
            period: {
                en: 'per year',
                es: 'por año',
                pt: 'por ano'
            },
            discount: {
                en: 'Save 11%',
                es: 'Ahorra 11%',
                pt: 'Economize 11%'
            },
            features: [
                { en: 'All 5 languages included', es: '5 idiomas incluidos', pt: '5 idiomas incluídos' },
                { en: 'A1 to C2 levels', es: 'Niveles A1 a C2', pt: 'Níveis A1 a C2' },
                { en: 'Speech recognition', es: 'Reconocimiento de voz', pt: 'Reconhecimento de voz' },
                { en: 'Standard support', es: 'Soporte estándar', pt: 'Suporte padrão' },
                { en: 'Basic progress tracking', es: 'Seguimiento básico de progreso', pt: 'Acompanhamento básico de progresso' }
            ],
            paypalItemName: 'Annual Subscription HablaYa!',
            paypalCmd: '_xclick-subscriptions',
            paypalParams: {
                a3: '1999.00',
                p3: '1',
                t3: 'Y',
                src: '1'
            }
        },
        
        quarterly: {
            name: {
                en: 'Quarterly Plan',
                es: 'Plan Trimestral',
                pt: 'Plano Trimestral'
            },
            price: 750,
            originalPrice: 1499,
            period: {
                en: 'per quarter',
                es: 'por trimestre',
                pt: 'por trimestre'
            },
            discount: {
                en: 'Save 50%',
                es: 'Ahorra 50%',
                pt: 'Economize 50%'
            },
            features: [
                { en: 'All 5 languages included', es: '5 idiomas incluidos', pt: '5 idiomas incluídos' },
                { en: 'A1 to C2 levels', es: 'Niveles A1 a C2', pt: 'Níveis A1 a C2' },
                { en: 'Speech recognition', es: 'Reconocimiento de voz', pt: 'Reconhecimento de voz' },
                { en: 'Basic support', es: 'Soporte básico', pt: 'Suporte básico' },
                { en: 'Limited progress tracking', es: 'Seguimiento limitado de progreso', pt: 'Acompanhamento limitado de progresso' }
            ],
            paypalItemName: 'Quarterly Subscription HablaYa!',
            paypalCmd: '_xclick-subscriptions',
            paypalParams: {
                a3: '750.00',
                p3: '3',
                t3: 'M',
                src: '1'
            }
        },
        
        monthly: {
            name: {
                en: 'Monthly Plan',
                es: 'Plan Mensual',
                pt: 'Plano Mensual'
            },
            price: 499,
            period: {
                en: '/month',
                es: '/mes',
                pt: '/mês'
            },
            features: [
                { en: 'Unlimited conversations', es: 'Conversaciones ilimitadas', pt: 'Conversas ilimitadas' },
                { en: 'All 5 languages included', es: '5 idiomas incluidos', pt: '5 idiomas incluídos' },
                { en: 'Speech recognition', es: 'Reconocimiento de voz', pt: 'Reconhecimento de voz' },
                { en: 'Priority support', es: 'Soporte prioritario', pt: 'Suporte prioritário' }
            ],
            paypalItemName: 'Monthly Subscription HablaYa!',
            paypalCmd: '_xclick-subscriptions',
            paypalParams: {
                a3: '499.00',
                p3: '1',
                t3: 'M',
                src: '1'
            }
        }
    },
    
    // Common features for all paid plans
    commonFeatures: [
        { en: 'All 5 languages included', es: '5 idiomas incluidos', pt: '5 idiomas incluídos' },
        { en: 'A1 to C2 levels', es: 'Niveles A1 a C2', pt: 'Níveis A1 a C2' },
        { en: 'Speech recognition', es: 'Reconocimiento de voz', pt: 'Reconhecimento de voz' }
    ],
    
    // Money back guarantee
    moneyBackGuarantee: {
        en: '30-day money back guarantee',
        es: 'Garantía de devolución de 30 días',
        pt: 'Garantia de devolução de 30 dias'
    },
    
    // Secure payment text
    securePayment: {
        en: 'Secure payment with PayPal',
        es: 'Pago seguro con PayPal',
        pt: 'Pagamento seguro com PayPal'
    },
    
    // Helper functions
    getCurrentLanguage() {
        return document.documentElement.getAttribute('data-lang') || 'en';
    },
    
    getText(textObj) {
        const lang = this.getCurrentLanguage();
        return textObj[lang] || textObj.en || textObj;
    },
    
    formatPrice(price) {
        return `${this.currencySymbol}${price.toLocaleString()}`;
    },
    
    generatePayPalForm(planKey, userId = '') {
        const plan = this.plans[planKey];
        if (!plan) return '';
        
        const form = document.createElement('form');
        form.action = 'https://www.paypal.com/cgi-bin/webscr';
        form.method = 'post';
        form.target = '_blank';
        
        const inputs = [
            { name: 'cmd', value: plan.paypalCmd || '_xclick' },
            { name: 'business', value: this.paypalBusiness },
            { name: 'lc', value: 'MX' },
            { name: 'item_name', value: plan.paypalItemName },
            { name: 'currency_code', value: this.currency },
            { name: 'custom', value: userId }
        ];
        
        // Add amount based on command type
        if (plan.paypalCmd === '_xclick-subscriptions') {
            inputs.push({ name: 'a3', value: plan.price.toFixed(2) });
            if (plan.paypalParams) {
                Object.entries(plan.paypalParams).forEach(([key, value]) => {
                    inputs.push({ name: key, value });
                });
            }
        } else {
            inputs.push({ name: 'amount', value: plan.price.toFixed(2) });
        }
        
        // Add additional PayPal parameters
        inputs.push(
            { name: 'button_subtype', value: 'services' },
            { name: 'no_note', value: '0' },
            { name: 'bn', value: 'PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest' }
        );
        
        inputs.forEach(input => {
            const inputElement = document.createElement('input');
            inputElement.type = 'hidden';
            inputElement.name = input.name;
            inputElement.value = input.value;
            form.appendChild(inputElement);
        });
        
        return form;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRICING_CONFIG;
} else {
    window.PRICING_CONFIG = PRICING_CONFIG;
} 