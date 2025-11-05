// ============================================
// NATASHA O'HARA - JAVASCRIPT
// ============================================

// ===== MENU MOBILE =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Toggle menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animação do ícone hambúrguer
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (menuToggle) {
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle && menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignora links que são apenas "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Adiciona sombra ao rolar
    if (scrollTop > 50) {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

// ===== INSTAGRAM WIDGET =====
// Função para carregar o widget do Instagram
function loadInstagramWidget() {
    const widgetContainer = document.getElementById('instagram-widget');
    
    if (!widgetContainer) return;
    
    // OPÇÃO 1: SnapWidget (Recomendado - Simples e gratuito)
    // Visite https://snapwidget.com/ para configurar e obter o código
    
    // OPÇÃO 2: EmbedSocial
    // Visite https://embedsocial.com/products/embedfeed/ para configurar
    
    // OPÇÃO 3: Galeria estática (Temporária até configurar widget real)
    // Esta é uma solução temporária que mostra um placeholder
    
    // Placeholder temporário - Substituir pelo código real do widget
    const placeholderHTML = `
        <div style="text-align: center; padding: 3rem;">
            <svg style="width: 80px; height: 80px; margin-bottom: 1rem; color: #E1306C;" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <h3 style="color: #3e6634; margin-bottom: 1rem;">Acompanhe meu trabalho no Instagram</h3>
            <p style="color: #728a65; margin-bottom: 1.5rem;">Veja fotos dos meus trabalhos, transformações e novidades</p>
            <a href="https://instagram.com/nattasha.ohara" target="_blank" style="display: inline-block; background-color: #E1306C; color: white; padding: 1rem 2rem; border-radius: 12px; font-weight: 600; text-decoration: none; transition: 0.3s;">
                Seguir @nattasha.ohara
            </a>
            <p style="color: #728a65; font-size: 0.875rem; margin-top: 2rem; font-style: italic;">
                💡 Para adicionar o feed do Instagram aqui, configure um widget gratuito no 
                <a href="https://snapwidget.com/" target="_blank" style="color: #f79b00; text-decoration: underline;">SnapWidget</a>
            </p>
        </div>
    `;
    
    widgetContainer.innerHTML = placeholderHTML;
    
    // ===== INSTRUÇÕES PARA ADICIONAR WIDGET REAL DO INSTAGRAM =====
    // 
    // PASSO 1: Visite https://snapwidget.com/
    // PASSO 2: Clique em "Create Widget"
    // PASSO 3: Escolha "Instagram Feed"
    // PASSO 4: Configure o widget:
    //    - Cole o username: nattasha.ohara
    //    - Escolha o layout: Grid ou Carousel
    //    - Defina o número de fotos
    //    - Personalize as cores para combinar com o site
    // PASSO 5: Copie o código gerado
    // PASSO 6: Substitua o placeholderHTML acima pelo código do SnapWidget
    //
    // Exemplo de código do SnapWidget:
    // <script src="https://snapwidget.com/js/snapwidget.js"></script>
    // <iframe src="https://snapwidget.com/embed/XXXXXX" 
    //         class="snapwidget-widget" 
    //         allowtransparency="true" 
    //         frameborder="0" 
    //         scrolling="no" 
    //         style="border:none; overflow:hidden; width:100%; ">
    // </iframe>
}

// Carregar widget quando a página estiver pronta
document.addEventListener('DOMContentLoaded', loadInstagramWidget);

// ===== ANIMAÇÕES DE SCROLL =====
// Detecta elementos visíveis na tela e adiciona animação
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplica animação aos cards de serviço
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.servico-card, .info-card, .observacao-box');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== ANALYTICS & TRACKING =====
// Função para rastrear cliques em botões importantes
function trackButtonClick(buttonName) {
    // Integração com Google Analytics (quando configurado)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'Button',
            'event_label': buttonName
        });
    }
    
    console.log('Button clicked:', buttonName);
}

// Adicionar tracking aos botões de CTA
document.addEventListener('DOMContentLoaded', function() {
    // Botões de WhatsApp
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', () => trackButtonClick('WhatsApp'));
    });
    
    // Botões de Instagram
    const instagramButtons = document.querySelectorAll('a[href*="instagram.com"]');
    instagramButtons.forEach(btn => {
        btn.addEventListener('click', () => trackButtonClick('Instagram'));
    });
    
    // Botão de Política
    const politicaButtons = document.querySelectorAll('a[href*="politica"]');
    politicaButtons.forEach(btn => {
        btn.addEventListener('click', () => trackButtonClick('Política'));
    });
});

// ===== LAZY LOADING DE IMAGENS =====
// Implementação de lazy loading para melhor performance
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}

// ===== VALIDAÇÃO DE FORMULÁRIOS (se necessário no futuro) =====
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// ===== DETECÇÃO DE DISPOSITIVO =====
function detectDevice() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.body.classList.add('mobile-device');
    } else {
        document.body.classList.add('desktop-device');
    }
}

document.addEventListener('DOMContentLoaded', detectDevice);

// ===== PREVENÇÃO DE SCROLL DURANTE MENU ABERTO (MOBILE) =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class') {
                    if (navMenu.classList.contains('active')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = '';
                    }
                }
            });
        });
        
        observer.observe(navMenu, { attributes: true });
    }
});

// ===== PERFORMANCE: Debounce para eventos de scroll/resize =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce em eventos pesados
window.addEventListener('resize', debounce(function() {
    console.log('Window resized');
}, 250));

// ===== MENSAGEM DE BOAS-VINDAS NO CONSOLE =====
console.log('%c👋 Olá! Bem-vindo ao site da Natasha O\'hara', 'color: #3e6634; font-size: 16px; font-weight: bold;');
console.log('%c✨ Especialista em cabelos naturais, crespos e cacheados', 'color: #f79b00; font-size: 14px;');
console.log('%c📱 WhatsApp: (27) 99927-1812', 'color: #728a65; font-size: 12px;');
console.log('%c📍 Vitória - ES', 'color: #728a65; font-size: 12px;');
