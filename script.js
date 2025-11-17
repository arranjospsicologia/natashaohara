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

// ===== GERENCIAMENTO DE COOKIES (LGPD) =====
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');
    const declineCookies = document.getElementById('decline-cookies');

    // Verificar se o usuário já respondeu sobre cookies
    const cookieConsent = localStorage.getItem('cookieConsent');

    // Se ainda não respondeu, mostrar banner após 1 segundo
    if (!cookieConsent && cookieBanner) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    // Botão de aceitar cookies
    if (acceptCookies) {
        acceptCookies.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            localStorage.setItem('cookieConsentDate', new Date().toISOString());
            hideCookieBanner();

            // Aqui você pode inicializar analytics ou outros scripts
            initializeAnalytics();
        });
    }

    // Botão de recusar cookies
    if (declineCookies) {
        declineCookies.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            localStorage.setItem('cookieConsentDate', new Date().toISOString());
            hideCookieBanner();
        });
    }

    // Função para esconder o banner
    function hideCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 400);
        }
    }

    // Inicializar analytics apenas se consentimento foi dado
    function initializeAnalytics() {
        const consent = localStorage.getItem('cookieConsent');

        if (consent === 'accepted') {
            // Aqui você pode adicionar scripts de analytics
            // Exemplo: Google Analytics, Facebook Pixel, etc.
            console.log('Analytics initialized - Consent given');

            // Se tiver Google Analytics configurado:
            // if (typeof gtag !== 'undefined') {
            //     gtag('consent', 'update', {
            //         'analytics_storage': 'granted'
            //     });
            // }
        }
    }

    // Se o usuário já aceitou, inicializar analytics
    if (cookieConsent === 'accepted') {
        initializeAnalytics();
    }
});

// ===== CARROSSEL DE DEPOIMENTOS =====
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.depoimentos-track');
    const carousel = document.querySelector('.depoimentos-carousel');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.carousel-btn-prev');
    const nextButton = document.querySelector('.carousel-btn-next');
    const indicators = Array.from(document.querySelectorAll('.carousel-indicators .indicator'));

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let slidesToShow = getSlidesToShow();
    const totalSlides = slides.length;
    let isTransitioning = false;
    let carouselInitialized = false;

    // Função para determinar quantos slides mostrar baseado na largura da tela
    function getSlidesToShow() {
        if (window.innerWidth <= 768) {
            return 1; // Mobile: 1 slide
        } else {
            return 3; // Desktop: 3 slides
        }
    }

    // Função para obter o gap do CSS computado
    function getComputedGap() {
        const computedStyle = window.getComputedStyle(track);
        const gap = computedStyle.gap || computedStyle.columnGap;
        return parseFloat(gap) || 32; // Fallback para 32px se não conseguir ler
    }

    // Função para atualizar a posição do carrossel com cálculo preciso
    function updateCarousel(animate = true) {
        if (!carouselInitialized) return;

        // Obter dimensões atuais
        const carouselWidth = carousel.getBoundingClientRect().width;
        const gap = getComputedGap();

        // Calcular largura de um slide baseado no container
        const slideWidth = (carouselWidth - (gap * (slidesToShow - 1))) / slidesToShow;

        // Calcular movimento total
        const moveAmount = currentIndex * (slideWidth + gap);

        if (animate) {
            track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            isTransitioning = true;

            // Liberar após a transição
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        } else {
            track.style.transition = 'none';
            isTransitioning = false;
        }

        track.style.transform = `translateX(-${moveAmount}px)`;

        updateIndicators();
        updateButtons();
    }

    // Função para atualizar os indicadores
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    // Função para atualizar estado dos botões
    function updateButtons() {
        const maxIndex = totalSlides - slidesToShow;

        if (prevButton) {
            prevButton.disabled = currentIndex === 0;
        }

        if (nextButton) {
            nextButton.disabled = currentIndex >= maxIndex;
        }
    }

    // Navegação - Botão Anterior
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0 && !isTransitioning) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    // Navegação - Botão Próximo
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            const maxIndex = totalSlides - slidesToShow;
            if (currentIndex < maxIndex && !isTransitioning) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    // Navegação - Indicadores
    indicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
            if (!isTransitioning) {
                const targetIndex = parseInt(indicator.getAttribute('data-slide'));
                currentIndex = targetIndex;
                updateCarousel();
            }
        });
    });

    // Suporte a swipe no mobile com prevenção de scroll vertical
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let isSwiping = false;
    let swipeDirectionDetermined = false;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isSwiping = false;
        swipeDirectionDetermined = false;
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        if (isTransitioning) return;

        const touchCurrentX = e.touches[0].clientX;
        const touchCurrentY = e.touches[0].clientY;

        const deltaX = Math.abs(touchCurrentX - touchStartX);
        const deltaY = Math.abs(touchCurrentY - touchStartY);

        // Determinar direção apenas uma vez no início do movimento
        if (!swipeDirectionDetermined && (deltaX > 5 || deltaY > 5)) {
            swipeDirectionDetermined = true;

            // Se o movimento horizontal é maior que o vertical, é um swipe horizontal
            if (deltaX > deltaY) {
                isSwiping = true;
            }
        }

        // Prevenir scroll vertical apenas se já determinamos que é swipe horizontal
        if (isSwiping) {
            e.preventDefault();
        }
    }, { passive: false }); // passive: false permite preventDefault()

    track.addEventListener('touchend', (e) => {
        if (isSwiping) {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        }
        // Reset completo do estado
        isSwiping = false;
        swipeDirectionDetermined = false;
    }, { passive: true });

    track.addEventListener('touchcancel', () => {
        // Reset completo em caso de cancelamento
        isSwiping = false;
        swipeDirectionDetermined = false;
    }, { passive: true });

    function handleSwipe() {
        if (isTransitioning) return;

        const swipeThreshold = 30; // Reduzido para melhor responsividade
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - próximo
                const maxIndex = totalSlides - slidesToShow;
                if (currentIndex < maxIndex) {
                    currentIndex++;
                    updateCarousel();
                }
            } else {
                // Swipe right - anterior
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            }
        }
    }

    // Atualizar ao redimensionar a janela com debounce melhorado
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newSlidesToShow = getSlidesToShow();
            if (newSlidesToShow !== slidesToShow) {
                slidesToShow = newSlidesToShow;
                // Ajustar currentIndex se necessário
                const maxIndex = totalSlides - slidesToShow;
                if (currentIndex > maxIndex) {
                    currentIndex = Math.max(0, maxIndex);
                }
            }
            updateCarousel(false);
        }, 250);
    });

    // Suporte a navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (isTransitioning) return;

        if (e.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        } else if (e.key === 'ArrowRight') {
            const maxIndex = totalSlides - slidesToShow;
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        }
    });

    // Inicializar o carrossel após as imagens carregarem
    function initializeCarousel() {
        carouselInitialized = true;
        updateCarousel(false);
    }

    // Esperar pelas imagens do carrossel carregarem
    const carouselImages = track.querySelectorAll('img');
    if (carouselImages.length > 0) {
        let imagesLoaded = 0;
        const totalImages = carouselImages.length;

        carouselImages.forEach(img => {
            if (img.complete) {
                imagesLoaded++;
            } else {
                img.addEventListener('load', () => {
                    imagesLoaded++;
                    if (imagesLoaded === totalImages) {
                        initializeCarousel();
                    }
                });
                img.addEventListener('error', () => {
                    imagesLoaded++;
                    if (imagesLoaded === totalImages) {
                        initializeCarousel();
                    }
                });
            }
        });

        // Se todas as imagens já estão carregadas
        if (imagesLoaded === totalImages) {
            initializeCarousel();
        }

        // Timeout de segurança - inicializar após 2 segundos mesmo se imagens não carregarem
        setTimeout(() => {
            if (!carouselInitialized) {
                initializeCarousel();
            }
        }, 2000);
    } else {
        // Se não há imagens, inicializar imediatamente
        initializeCarousel();
    }

    // Auto-play opcional (comentado por padrão)
    // const autoplayInterval = 5000; // 5 segundos
    // let autoplayTimer = setInterval(() => {
    //     const maxIndex = totalSlides - slidesToShow;
    //     if (currentIndex < maxIndex) {
    //         currentIndex++;
    //     } else {
    //         currentIndex = 0;
    //     }
    //     updateCarousel();
    // }, autoplayInterval);

    // Pausar auto-play ao interagir
    // track.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    // track.addEventListener('touchstart', () => clearInterval(autoplayTimer));
});

// ===== CARROSSEL DE SERVIÇOS =====
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.servicos-track');
    const carousel = document.querySelector('.servicos-carousel');
    const slides = track ? Array.from(track.children) : [];
    const prevButton = document.querySelector('.servicos-btn-prev');
    const nextButton = document.querySelector('.servicos-btn-next');
    const indicators = Array.from(document.querySelectorAll('.servicos-indicators .indicator'));

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let slidesToShow = getSlidesToShowServicos();
    const totalSlides = slides.length;
    let isTransitioning = false;
    let carouselInitialized = false;

    // Função para determinar quantos slides mostrar baseado na largura da tela
    function getSlidesToShowServicos() {
        if (window.innerWidth <= 768) {
            return 1; // Mobile: 1 slide
        } else {
            return 2; // Desktop: 2 slides
        }
    }

    // Função para obter o gap do CSS computado
    function getComputedGap() {
        const computedStyle = window.getComputedStyle(track);
        const gap = computedStyle.gap || computedStyle.columnGap;
        return parseFloat(gap) || 32; // Fallback para 32px se não conseguir ler
    }

    // Função para atualizar a posição do carrossel com cálculo preciso
    function updateCarousel(animate = true) {
        if (!carouselInitialized) return;

        // Obter dimensões atuais
        const carouselWidth = carousel.getBoundingClientRect().width;
        const gap = getComputedGap();

        // Calcular largura de um slide baseado no container
        const slideWidth = (carouselWidth - (gap * (slidesToShow - 1))) / slidesToShow;

        // Calcular movimento total
        const moveAmount = currentIndex * (slideWidth + gap);

        if (animate) {
            track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            isTransitioning = true;

            // Liberar após a transição
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        } else {
            track.style.transition = 'none';
            isTransitioning = false;
        }

        track.style.transform = `translateX(-${moveAmount}px)`;

        updateIndicators();
        updateButtons();
    }

    // Função para atualizar os indicadores
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    // Função para atualizar estado dos botões
    function updateButtons() {
        const maxIndex = totalSlides - slidesToShow;

        if (prevButton) {
            prevButton.disabled = currentIndex === 0;
        }

        if (nextButton) {
            nextButton.disabled = currentIndex >= maxIndex;
        }
    }

    // Navegação - Botão Anterior
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0 && !isTransitioning) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    // Navegação - Botão Próximo
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            const maxIndex = totalSlides - slidesToShow;
            if (currentIndex < maxIndex && !isTransitioning) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    // Navegação - Indicadores
    indicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
            if (!isTransitioning) {
                const targetIndex = parseInt(indicator.getAttribute('data-slide'));
                currentIndex = targetIndex;
                updateCarousel();
            }
        });
    });

    // Suporte a swipe no mobile com prevenção de scroll vertical
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let isSwiping = false;
    let swipeDirectionDetermined = false;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isSwiping = false;
        swipeDirectionDetermined = false;
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        if (isTransitioning) return;

        const touchCurrentX = e.touches[0].clientX;
        const touchCurrentY = e.touches[0].clientY;

        const deltaX = Math.abs(touchCurrentX - touchStartX);
        const deltaY = Math.abs(touchCurrentY - touchStartY);

        // Determinar direção apenas uma vez no início do movimento
        if (!swipeDirectionDetermined && (deltaX > 5 || deltaY > 5)) {
            swipeDirectionDetermined = true;

            // Se o movimento horizontal é maior que o vertical, é um swipe horizontal
            if (deltaX > deltaY) {
                isSwiping = true;
            }
        }

        // Prevenir scroll vertical apenas se já determinamos que é swipe horizontal
        if (isSwiping) {
            e.preventDefault();
        }
    }, { passive: false }); // passive: false permite preventDefault()

    track.addEventListener('touchend', (e) => {
        if (isSwiping) {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        }
        // Reset completo do estado
        isSwiping = false;
        swipeDirectionDetermined = false;
    }, { passive: true });

    track.addEventListener('touchcancel', () => {
        // Reset completo em caso de cancelamento
        isSwiping = false;
        swipeDirectionDetermined = false;
    }, { passive: true });

    function handleSwipe() {
        if (isTransitioning) return;

        const swipeThreshold = 30; // Reduzido para melhor responsividade
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - próximo
                const maxIndex = totalSlides - slidesToShow;
                if (currentIndex < maxIndex) {
                    currentIndex++;
                    updateCarousel();
                }
            } else {
                // Swipe right - anterior
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            }
        }
    }

    // Atualizar ao redimensionar a janela com debounce melhorado
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newSlidesToShow = getSlidesToShowServicos();
            if (newSlidesToShow !== slidesToShow) {
                slidesToShow = newSlidesToShow;
                // Ajustar currentIndex se necessário
                const maxIndex = totalSlides - slidesToShow;
                if (currentIndex > maxIndex) {
                    currentIndex = Math.max(0, maxIndex);
                }
            }
            updateCarousel(false);
        }, 250);
    });

    // Inicializar o carrossel
    function initializeCarousel() {
        carouselInitialized = true;
        updateCarousel(false);
    }

    // Inicializar após um pequeno delay para garantir que o CSS foi aplicado
    setTimeout(() => {
        initializeCarousel();
    }, 100);
});

// ===== GALERIA DE FOTOS - TOGGLE VER MAIS =====
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('galeria-toggle-btn');
    const galeriaGrid = document.querySelector('.galeria-grid');
    const toggleText = toggleBtn?.querySelector('.toggle-text');

    if (!toggleBtn || !galeriaGrid) return;

    toggleBtn.addEventListener('click', function() {
        const isExpanded = galeriaGrid.classList.contains('show-all');

        if (isExpanded) {
            // Colapsar galeria
            galeriaGrid.classList.remove('show-all');
            toggleBtn.classList.remove('active');
            toggleText.textContent = 'Ver mais';

            // Scroll suave para o topo da galeria
            const galeriaSection = document.getElementById('galeria');
            if (galeriaSection) {
                const headerOffset = 100;
                const elementPosition = galeriaSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            // Expandir galeria
            galeriaGrid.classList.add('show-all');
            toggleBtn.classList.add('active');
            toggleText.textContent = 'Ver menos';
        }
    });
});

// ===== FAQ ACCORDION =====
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Fechar todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle o item atual
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    // Abrir o primeiro item por padrão
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
});
