// chatbot.js - Asistente virtual interactivo para HablaYa
document.addEventListener('DOMContentLoaded', function() {
    // Configuración inicial del chatbot
    const chatbotConfig = {
        botName: 'HablaYa Assistant',
        primaryColor: '#4361ee',
        accentColor: '#f72585',
        position: 'bottom-right',
        greetingMessage: '¡Hola! 👋 Bienvenido a HablaYa, tu plataforma para aprender inglés conversando con inteligencia artificial. ¿En qué puedo ayudarte hoy?'
    };
// Versión de diagnóstico del chatbot
document.addEventListener('DOMContentLoaded', function() {
  console.log('Chatbot initialization started');
  
  // Crear botón flotante mínimo
  const btn = document.createElement('button');
  btn.textContent = 'Chat';
  btn.style.position = 'fixed';
  btn.style.bottom = '20px';
  btn.style.right = '20px';
  btn.style.zIndex = '1000';
  btn.style.padding = '15px';
  btn.style.background = '#4361ee';
  btn.style.color = 'white';
  btn.style.border = 'none';
  btn.style.borderRadius = '50%';
  btn.style.cursor = 'pointer';
  
  btn.addEventListener('click', function() {
    alert('Chatbot button clicked!');
  });
  
  document.body.appendChild(btn);
  console.log('Chatbot button added to DOM');
});
    // Estados del flujo de conversación
    const conversationFlow = {
        welcome: {
            message: chatbotConfig.greetingMessage,
            options: [
                { text: '¿Qué es HablaYa?', next: 'whatIs' },
                { text: 'Planes y precios', next: 'pricing' },
                { text: 'Iniciar prueba gratuita', next: 'freeTrial' }
            ]
        },
        whatIs: {
            message: 'HablaYa es una herramienta de aprendizaje de inglés que utiliza inteligencia artificial para simular conversaciones reales. Puedes practicar en cualquier momento y lugar, mejorando tu fluidez y comprensión de manera natural.',
            options: [
                { text: 'Planes y precios', next: 'pricing' },
                { text: 'Iniciar prueba gratuita', next: 'freeTrial' },
                { text: 'Volver al inicio', next: 'welcome' }
            ]
        },
        pricing: {
            message: 'Ofrecemos dos planes:<br><br>' +
                     '• <strong>Mensual:</strong> $179 MXN al mes<br>' +
                     '• <strong>Anual:</strong> $1,799 MXN al año (ahorra un 10%)<br><br>' +
                     'Además, cuentas con una garantía de devolución de 30 días si no estás satisfecho.',
            options: [
                { text: 'Iniciar prueba gratuita', next: 'freeTrial' },
                { text: 'Volver al inicio', next: 'welcome' }
            ]
        },
        freeTrial: {
            message: '¡Excelente! Puedes iniciar tu prueba gratuita directamente en nuestro sitio web:<br><br>' +
                     '<a href="https://www.hablaya.site" target="_blank" class="chatbot-link">www.hablaya.site</a>',
            options: [
                { text: 'Volver al inicio', next: 'welcome' }
            ]
        }
    };

    // Crear elementos del DOM para el chatbot
    function createChatbotElements() {
        // Contenedor principal del chatbot
        const chatbotContainer = document.createElement('div');
        chatbotContainer.id = 'chatbot-container';
        chatbotContainer.className = 'chatbot-container';
        chatbotContainer.setAttribute('aria-hidden', 'true');
        
        // Botón flotante
        const chatbotButton = document.createElement('button');
        chatbotButton.id = 'chatbot-button';
        chatbotButton.className = 'chatbot-button';
        chatbotButton.setAttribute('aria-label', 'Abrir asistente virtual');
        chatbotButton.innerHTML = '<i class="fas fa-comment-dots"></i>';
        
        // Ventana del chat
        const chatWindow = document.createElement('div');
        chatWindow.id = 'chatbot-window';
        chatWindow.className = 'chatbot-window';
        chatWindow.setAttribute('aria-live', 'polite');
        
        // Encabezado del chat
        const chatHeader = document.createElement('div');
        chatHeader.className = 'chatbot-header';
        chatHeader.innerHTML = `
            <h3>${chatbotConfig.botName}</h3>
            <button id="chatbot-close" class="chatbot-close" aria-label="Cerrar chat">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Cuerpo del chat (mensajes)
        const chatBody = document.createElement('div');
        chatBody.id = 'chatbot-messages';
        chatBody.className = 'chatbot-messages';
        
        // Pie del chat (entrada de usuario)
        const chatFooter = document.createElement('div');
        chatFooter.className = 'chatbot-footer';
        
        // Ensamblar elementos
        chatWindow.appendChild(chatHeader);
        chatWindow.appendChild(chatBody);
        chatWindow.appendChild(chatFooter);
        chatbotContainer.appendChild(chatbotButton);
        chatbotContainer.appendChild(chatWindow);
        
        // Agregar al cuerpo del documento
        document.body.appendChild(chatbotContainer);
        
        // Establecer estilos dinámicos
        setChatbotStyles();
        
        // Iniciar con el mensaje de bienvenida
        showConversationStep('welcome');
        
        // Event listeners
        chatbotButton.addEventListener('click', toggleChatWindow);
        document.getElementById('chatbot-close').addEventListener('click', toggleChatWindow);
        
        // Event listener para teclado (accesibilidad)
        chatbotButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                toggleChatWindow();
            }
        });
    }

    // Establecer estilos dinámicos para el chatbot
    function setChatbotStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .chatbot-container {
                position: fixed;
                ${chatbotConfig.position === 'bottom-right' ? 'right: 20px; bottom: 20px;' : 'left: 20px; bottom: 20px;'}
                z-index: 1000;
                font-family: 'Inter', sans-serif;
            }
            
            .chatbot-button {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: ${chatbotConfig.primaryColor};
                color: white;
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                transition: all 0.3s ease;
            }
            
            .chatbot-button:hover {
                background-color: ${chatbotConfig.accentColor};
                transform: scale(1.1);
            }
            
            .chatbot-window {
                width: 320px;
                max-height: 500px;
                background-color: white;
                border-radius: 12px;
                box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                display: none;
                flex-direction: column;
                overflow: hidden;
                position: absolute;
                ${chatbotConfig.position === 'bottom-right' ? 'right: 0; bottom: 70px;' : 'left: 0; bottom: 70px;'}
            }
            
            .chatbot-header {
                padding: 15px;
                background-color: ${chatbotConfig.primaryColor};
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .chatbot-header h3 {
                margin: 0;
                font-size: 16px;
            }
            
            .chatbot-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 16px;
            }
            
            .chatbot-messages {
                padding: 15px;
                flex-grow: 1;
                overflow-y: auto;
                background-color: #f8fafc;
            }
            
            .chatbot-message {
                margin-bottom: 15px;
                line-height: 1.5;
            }
            
            .chatbot-options {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 15px;
            }
            
            .chatbot-option {
                padding: 10px 15px;
                background-color: white;
                border: 1px solid #e2e8f0;
                border-radius: 6px;
                cursor: pointer;
                text-align: left;
                transition: all 0.2s ease;
            }
            
            .chatbot-option:hover {
                background-color: ${chatbotConfig.primaryColor};
                color: white;
                border-color: ${chatbotConfig.primaryColor};
            }
            
            .chatbot-link {
                color: ${chatbotConfig.primaryColor};
                text-decoration: none;
                font-weight: 500;
            }
            
            .chatbot-link:hover {
                text-decoration: underline;
            }
            
            @media (max-width: 480px) {
                .chatbot-window {
                    width: 280px;
                    max-height: 70vh;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Mostrar/ocultar la ventana del chat
    function toggleChatWindow() {
        const chatWindow = document.getElementById('chatbot-window');
        const chatbotContainer = document.getElementById('chatbot-container');
        
        if (chatWindow.style.display === 'flex') {
            chatWindow.style.display = 'none';
            chatbotContainer.setAttribute('aria-hidden', 'true');
        } else {
            chatWindow.style.display = 'flex';
            chatbotContainer.setAttribute('aria-hidden', 'false');
            document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;
        }
    }

    // Mostrar un paso de la conversación
    function showConversationStep(stepId) {
        const step = conversationFlow[stepId];
        const chatBody = document.getElementById('chatbot-messages');
        const chatFooter = document.querySelector('.chatbot-footer');
        
        // Limpiar mensajes anteriores
        chatBody.innerHTML = '';
        chatFooter.innerHTML = '';
        
        // Agregar mensaje
        const messageElement = document.createElement('div');
        messageElement.className = 'chatbot-message';
        messageElement.innerHTML = step.message;
        chatBody.appendChild(messageElement);
        
        // Agregar opciones
        if (step.options && step.options.length > 0) {
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'chatbot-options';
            
            step.options.forEach(option => {
                const optionButton = document.createElement('button');
                optionButton.className = 'chatbot-option';
                optionButton.textContent = option.text;
                optionButton.addEventListener('click', () => showConversationStep(option.next));
                optionButton.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        showConversationStep(option.next);
                    }
                });
                optionsContainer.appendChild(optionButton);
            });
            
            chatFooter.appendChild(optionsContainer);
        }
        
        // Auto-scroll al final
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Inicializar el chatbot
    createChatbotElements();

    // Hacer el chatbot accesible desde la consola para debugging
    window.HablaYaChatbot = {
        showStep: showConversationStep,
        toggle: toggleChatWindow
    };
});
