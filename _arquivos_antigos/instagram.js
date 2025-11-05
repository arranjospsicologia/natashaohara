// Natasha O'hara - Instagram Feed Integration

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== INSTAGRAM FEED CONFIGURATION ==========
    const instagramConfig = {
        username: 'nattasha.ohara',
        profileUrl: 'https://instagram.com/nattasha.ohara',
        // Placeholder images - substituir por fotos reais do Instagram quando disponível
        posts: [
            {
                id: 1,
                imageUrl: 'assets/instagram-1.jpg',
                caption: 'Trabalho especial em cabelo cacheado ✨',
                likes: 0,
                comments: 0
            },
            {
                id: 2,
                imageUrl: 'assets/instagram-2.jpg',
                caption: 'Corte bordado em cabelo crespo 🌟',
                likes: 0,
                comments: 0
            },
            {
                id: 3,
                imageUrl: 'assets/instagram-3.jpg',
                caption: 'Transformação incrível 💚',
                likes: 0,
                comments: 0
            },
            {
                id: 4,
                imageUrl: 'assets/instagram-4.jpg',
                caption: 'Cachos definidos e perfeitos ✂️',
                likes: 0,
                comments: 0
            },
            {
                id: 5,
                imageUrl: 'assets/instagram-5.jpg',
                caption: 'Sobrancelha perfeita 😍',
                likes: 0,
                comments: 0
            },
            {
                id: 6,
                imageUrl: 'assets/instagram-6.jpg',
                caption: 'Day after lindo 🫶',
                likes: 0,
                comments: 0
            }
        ]
    };
    
    // ========== RENDER INSTAGRAM FEED ==========
    function renderInstagramFeed() {
        const feedContainer = document.getElementById('instagram-feed');
        
        if (!feedContainer) return;
        
        // Clear placeholder
        feedContainer.innerHTML = '';
        
        // Create grid
        instagramConfig.posts.forEach(post => {
            const postElement = createPostElement(post);
            feedContainer.appendChild(postElement);
        });
    }
    
    // ========== CREATE POST ELEMENT ==========
    function createPostElement(post) {
        const postDiv = document.createElement('div');
        postDiv.className = 'instagram-post';
        postDiv.innerHTML = `
            <a href="${instagramConfig.profileUrl}" target="_blank" rel="noopener" class="instagram-post-link">
                <div class="instagram-post-image" style="background-image: url('${post.imageUrl}');">
                    <div class="instagram-post-overlay">
                        <div class="instagram-post-stats">
                            <span>
                                <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                                ${post.likes || 0}
                            </span>
                            <span>
                                <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                </svg>
                                ${post.comments || 0}
                            </span>
                        </div>
                        <div class="instagram-icon">
                            <svg width="30" height="30" fill="white" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        `;
        
        return postDiv;
    }
    
    // ========== ALTERNATIVE: EMBED INSTAGRAM WIDGET ==========
    // Função para carregar widget de terceiros se disponível
    function loadInstagramWidget() {
        // Opção 1: SnapWidget (gratuito com limitações)
        // Descomentar e configurar se necessário
        /*
        const script = document.createElement('script');
        script.src = 'https://snapwidget.com/js/snapwidget.js';
        script.async = true;
        document.head.appendChild(script);
        */
        
        // Opção 2: EmbedSocial (pago)
        // Descomentar e configurar se necessário
        /*
        const script = document.createElement('script');
        script.src = 'https://embedsocial.com/cdn/ht.js';
        script.id = 'EmbedSocialHashtagScript';
        document.head.appendChild(script);
        */
    }
    
    // ========== MANUAL UPDATE INSTRUCTIONS ==========
    // Para atualizar o feed manualmente:
    // 1. Adicione as imagens na pasta /assets/ (instagram-1.jpg, instagram-2.jpg, etc.)
    // 2. Atualize o array instagramConfig.posts acima com as novas URLs
    // 3. O feed será atualizado automaticamente
    
    // ========== INITIALIZE ==========
    renderInstagramFeed();
    
    // Opcional: Auto-refresh a cada 5 minutos (se usar API)
    // setInterval(renderInstagramFeed, 300000);
});

// ========== CSS STYLES FOR INSTAGRAM FEED ==========
const instagramStyles = document.createElement('style');
instagramStyles.textContent = `
    .instagram-post {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        aspect-ratio: 1 / 1;
    }
    
    .instagram-post-link {
        display: block;
        width: 100%;
        height: 100%;
    }
    
    .instagram-post-image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease;
    }
    
    .instagram-post:hover .instagram-post-image {
        transform: scale(1.05);
    }
    
    .instagram-post-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(62, 102, 52, 0.85);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        gap: 1rem;
    }
    
    .instagram-post:hover .instagram-post-overlay {
        opacity: 1;
    }
    
    .instagram-post-stats {
        display: flex;
        gap: 2rem;
        color: white;
        font-weight: 600;
    }
    
    .instagram-post-stats span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .instagram-icon {
        opacity: 0.9;
    }
    
    /* Placeholder styles */
    .instagram-placeholder {
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #f1e9de 0%, #ffffff 100%);
    }
    
    .instagram-placeholder p {
        font-size: 1.2rem;
        color: #3e6634;
    }
`;
document.head.appendChild(instagramStyles);

// ========== NOTA IMPORTANTE ==========
/*
CONFIGURAÇÃO DO FEED DO INSTAGRAM:

Para ter um feed do Instagram totalmente funcional e auto-atualizado, você tem 3 opções:

OPÇÃO 1 - FEED MANUAL (ATUAL):
- Adicione imagens manualmente na pasta /assets/
- Atualize o array instagramConfig.posts com os novos posts
- Simples, gratuito, mas requer atualização manual

OPÇÃO 2 - WIDGET DE TERCEIROS (RECOMENDADO):
- Use serviços como SnapWidget (https://snapwidget.com/) - Gratuito com limitações
- Ou EmbedSocial (https://embedsocial.com/) - Pago mas mais recursos
- Copie o código embed fornecido e substitua o conteúdo do #instagram-feed

OPÇÃO 3 - API DO INSTAGRAM (AVANÇADO):
- Requer conta de negócios do Instagram
- Necessita autenticação via Facebook Graph API
- Requer backend (Node.js, PHP, etc.) para gerenciar tokens
- Atualização automática do feed

Para este projeto, recomendo iniciar com a OPÇÃO 1 (manual) e depois migrar para
OPÇÃO 2 (SnapWidget) quando quiser automatização sem custos de backend.

Instruções para SnapWidget:
1. Vá para https://snapwidget.com/
2. Escolha "Instagram Feed"
3. Configure o layout (Grid é recomendado)
4. Copie o código fornecido
5. Cole no HTML onde está o #instagram-feed
*/
