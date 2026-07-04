# 🚀 Guia Rápido - Site Natasha O'hara

## Início Rápido em 5 Passos

### 1️⃣ Adicione Fotos (ESSENCIAL)

Coloque fotos na pasta `/assets/`:

```
assets/
├── hero-photo.jpg          # Foto principal (1920x1080px recomendado)
├── about-photo.jpg         # Foto da Natasha (800x800px)
├── instagram-1.jpg         # Feed Instagram (600x600px)
├── instagram-2.jpg
├── instagram-3.jpg
├── instagram-4.jpg
├── instagram-5.jpg
└── instagram-6.jpg
```

**Dica:** Use ferramentas como [TinyPNG](https://tinypng.com/) para otimizar as imagens.

### 2️⃣ Configure o GitHub Pages

```bash
# Na pasta do projeto
git init
git add .
git commit -m "Site Natasha O'hara - Versão inicial"

# Conecte ao seu repositório GitHub
git remote add origin https://github.com/SEU-USUARIO/natasha-ohara-site.git
git branch -M main
git push -u origin main
```

Depois no GitHub:
1. Vá em **Settings** > **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Clique em **Save**

🎉 Seu site estará no ar em: `https://SEU-USUARIO.github.io/natasha-ohara-site/`

### 3️⃣ Configure o Feed do Instagram

**Opção Fácil - SnapWidget (Recomendado):**

1. Acesse [snapwidget.com](https://snapwidget.com/)
2. Clique em "Create Widget" > "Instagram Feed"
3. Escolha layout "Grid" com 6 fotos
4. Configure:
   - Instagram: `@nattasha.ohara`
   - Layout: Grid 3x2
   - Border: None
   - Hover: Show likes/comments
5. Copie o código gerado
6. No arquivo `index.html`, substitua o conteúdo dentro de:
   ```html
   <div id="instagram-feed" class="instagram-grid">
       <!-- Cole o código do SnapWidget aqui -->
   </div>
   ```
v v
### 4️⃣ Configure Domínio Personalizado (Opcional)

**No registro.br:**

1. Registre `natashaohara.com.br`
2. Vá em **DNS** > **Adicionar Registro**
3. Adicione estes 4 registros tipo A:
   ```
   @  →  185.199.108.153
   @  →  185.199.109.153
   @  →  185.199.110.153
   @  →  185.199.111.153
   ```
4. Adicione 1 registro CNAME:
   ```
   www  →  SEU-USUARIO.github.io
   ```

**No GitHub:**

1. Settings > Pages > Custom domain
2. Digite: `natashaohara.com.br`
3. Clique em **Save**
4. Marque ✅ **Enforce HTTPS**

⏰ Aguarde 24-48h para propagação DNS

### 5️⃣ Teste Tudo

✅ Checklist de Teste:

- [ ] Site abre corretamente
- [ ] Todas as páginas funcionam (Home, Sobre, Serviços, Política, Contato)
- [ ] Menu mobile funciona
- [ ] Botão WhatsApp flutuante funciona
- [ ] Links para Instagram funcionam
- [ ] Links para WhatsApp funcionam
- [ ] Mapa carrega corretamente
- [ ] FAQ abre/fecha corretamente
- [ ] Site funciona em mobile
- [ ] Site funciona em tablet
- [ ] Site funciona em desktop

## 📝 Atualizações Futuras

### Como Atualizar Preços

1. Abra `servicos.html`
2. Procure por `<span class="price">R$ XXX,XX</span>`
3. Altere o valor
4. Salve e faça push:
   ```bash
   git add servicos.html
   git commit -m "Atualização de preços"
   git push
   ```

### Como Atualizar Horários

1. Edite o footer em **todos** os arquivos HTML
2. Procure por:
   ```html
   <div class="footer-section">
       <h4>Horários</h4>
   ```
3. Altere os horários
4. Salve e faça push

### Como Adicionar Novos Serviços

1. Abra `servicos.html`
2. Copie uma seção de serviço existente
3. Cole e modifique com o novo serviço
4. Salve e faça push

## 🆘 Problemas Comuns

### "Site não aparece no GitHub Pages"
- ✅ Aguarde 10 minutos
- ✅ Verifique se o repositório está público
- ✅ Confira Settings > Pages

### "Fotos não aparecem"
- ✅ Verifique se as fotos estão em `/assets/`
- ✅ Confirme os nomes dos arquivos
- ✅ Limpe o cache do navegador (Ctrl+F5)

### "Domínio não funciona"
- ✅ Aguarde 24-48h após configurar DNS
- ✅ Verifique os registros DNS no registro.br
- ✅ Confira se está marcado "Enforce HTTPS"

### "Menu mobile não abre"
- ✅ Limpe o cache do navegador
- ✅ Verifique se o arquivo `js/main.js` existe
- ✅ Abra o console (F12) e veja se há erros

## 📱 Compartilhe nas Redes

Após publicar, compartilhe nos stories do Instagram:

**Texto sugerido:**
```
🌟 Nosso novo site está no ar! 🌟

Agora ficou ainda mais fácil conhecer meus serviços e agendar seu horário.

✂️ Especialista em cabelos naturais, crespos e cacheados
📍 Jardim da Penha - Vitória/ES
📱 Agende pelo link na bio

www.natashaohara.com.br

#cabelosnaturais #cabeloscrespos #cabeloscacheados #salaodebeleza #vitoria #es
```

## 🎯 Próximos Passos

1. **Semana 1:**
   - ✅ Adicionar fotos profissionais
   - ✅ Configurar domínio
   - ✅ Testar em todos os dispositivos

2. **Semana 2:**
   - ✅ Integrar widget Instagram
   - ✅ Adicionar Google Analytics
   - ✅ Compartilhar nas redes sociais

3. **Mês 1:**
   - ✅ Coletar feedback dos clientes
   - ✅ Ajustar conteúdo se necessário
   - ✅ Adicionar depoimentos (futuro)

## 📞 Contatos do Site

- 📱 WhatsApp: (27) 99927-1812
- 📸 Instagram: @nattasha.ohara
- 📍 Endereço: Rua Darcy Grijó, 50, Sala 407, Vitória-ES

---

**Dúvidas?** Consulte o [README.md](README.md) completo ou entre em contato com o desenvolvedor.

✨ Sucesso com seu novo site! ✨
