# Site Natasha O'hara

Site profissional para a cabeleireira Natasha O'hara, especialista em cabelos naturais, crespos e cacheados.

## 🎨 Identidade Visual

- **Cores Principais:** 
  - Verde: #3e6634
  - Laranja: #f79b00
  - Amarelo: #fce100

- **Cores Secundárias:**
  - Verde claro: #728a65
  - Bege: #f1e9de

- **Tipografia:** Montserrat (via Google Fonts)

## 📋 Estrutura do Site

- **Home**: Hero com CTA, aviso de política, botões de ação
- **Sobre**: História da Natasha e do salão
- **Serviços**: Lista completa de serviços e preços
- **Galeria**: Feed do Instagram (requer configuração)
- **Contato**: Endereço, horários, mapa do Google
- **Política de Atendimento**: Página dedicada às políticas

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em "New Repository"
3. Nome sugerido: `natasha-ohara-site`
4. Marque como **Public**
5. Clique em "Create repository"

### Passo 2: Upload dos Arquivos

**Opção A: Via Interface Web do GitHub**
1. No repositório criado, clique em "uploading an existing file"
2. Arraste todos os arquivos e pastas do site
3. Commit as mudanças

**Opção B: Via Git (Linha de Comando)**
```bash
cd natasha-ohara-site
git init
git add .
git commit -m "Initial commit - Site Natasha O'hara"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/natasha-ohara-site.git
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No repositório, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione **main** branch
4. Clique em **Save**
5. Aguarde alguns minutos

Seu site estará disponível em:
`https://SEU-USUARIO.github.io/natasha-ohara-site/`

## 🌐 Configurar Domínio Personalizado (registro.br)

### Passo 1: Registrar Domínio

1. Acesse [registro.br](https://registro.br)
2. Pesquise e registre o domínio desejado (ex: `natashaohara.com.br`)

### Passo 2: Configurar DNS

No painel do registro.br, adicione os seguintes registros DNS:

**Para usar domínio raiz (natashaohara.com.br):**
```
Tipo: A
Nome: @
Valor: 185.199.108.153
```
```
Tipo: A
Nome: @
Valor: 185.199.109.153
```
```
Tipo: A
Nome: @
Valor: 185.199.110.153
```
```
Tipo: A
Nome: @
Valor: 185.199.111.153
```

**Para usar subdomínio (www.natashaohara.com.br):**
```
Tipo: CNAME
Nome: www
Valor: SEU-USUARIO.github.io
```

### Passo 3: Configurar no GitHub Pages

1. No repositório GitHub, vá em **Settings** > **Pages**
2. Em "Custom domain", digite seu domínio: `natashaohara.com.br`
3. Clique em **Save**
4. Marque a opção **Enforce HTTPS** (aguarde alguns minutos antes)

**Nota:** Pode levar até 48h para o DNS propagar completamente.

## 📸 Configurar Widget do Instagram

O site está preparado para receber o feed do Instagram. Siga os passos:

### Método Recomendado: SnapWidget (Grátis)

1. Acesse [SnapWidget](https://snapwidget.com/)
2. Clique em **"Create Widget"**
3. Escolha **"Instagram Feed"**
4. Configure:
   - Username: `nattasha.ohara`
   - Layout: Grid (recomendado)
   - Number of Posts: 6-9
   - Widget Size: Responsive
   - Theme: Customize com as cores do site
5. Clique em **"Get Widget"**
6. Copie o código gerado
7. Abra o arquivo `js/script.js`
8. Localize a função `loadInstagramWidget()`
9. Substitua o `placeholderHTML` pelo código do SnapWidget

Exemplo de código do SnapWidget:
```javascript
const widgetHTML = `
    <script src="https://snapwidget.com/js/snapwidget.js"></script>
    <iframe src="https://snapwidget.com/embed/XXXXXX" 
            class="snapwidget-widget" 
            allowtransparency="true" 
            frameborder="0" 
            scrolling="no" 
            style="border:none; overflow:hidden; width:100%; min-height:400px;">
    </iframe>
`;
widgetContainer.innerHTML = widgetHTML;
```

### Alternativa: EmbedSocial

1. Acesse [EmbedSocial](https://embedsocial.com/)
2. Crie uma conta gratuita
3. Conecte sua conta do Instagram
4. Personalize o widget
5. Copie o código embed
6. Cole em `js/script.js` conforme instruções acima

## 📱 Configurar Google Analytics (Opcional)

Para rastrear visitantes:

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade
3. Copie o código de medição (gtag.js)
4. Cole no `<head>` de `index.html` e `politica.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🗺️ Atualizar Mapa do Google

O iframe do mapa está com coordenadas genéricas. Para atualizar:

1. Acesse [Google Maps](https://maps.google.com/)
2. Pesquise: "Rua Darcy Grijó, 50, Vitória, ES"
3. Clique em "Compartilhar" > "Incorporar um mapa"
4. Copie o código iframe
5. Substitua o iframe em `index.html` na seção de Contato

## 📝 Atualizar Conteúdo

### Adicionar Fotos do Salão

1. Adicione as fotos na pasta `images/`
2. Edite `index.html` para incluir as imagens onde desejar
3. Exemplo:
```html
<img src="images/salao-1.jpg" alt="Interior do salão">
```

### Atualizar Serviços ou Preços

Edite o arquivo `index.html`, seção `id="servicos"`

### Atualizar Horários

Edite o arquivo `index.html`, seção `id="contato"`

## 🔧 Manutenção

### Atualizar Site

1. Edite os arquivos HTML, CSS ou JS conforme necessário
2. Commit e push para o GitHub:
```bash
git add .
git commit -m "Descrição da atualização"
git push
```
3. O GitHub Pages atualizará automaticamente em alguns minutos

### Backup

Mantenha sempre uma cópia local dos arquivos e faça commits regulares no GitHub.

## 📞 Contato

**Natasha O'hara**
- 📱 WhatsApp: (27) 99927-1812
- 📧 Instagram: [@nattasha.ohara](https://instagram.com/nattasha.ohara)
- 📍 Rua Darcy Grijó, 50, Sala 410 - Vitória/ES

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS)
- JavaScript Vanilla (sem frameworks)
- Google Fonts (Montserrat)
- GitHub Pages (hospedagem)

## 📄 Licença

© 2024 Natasha O'hara. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para Natasha O'hara**
