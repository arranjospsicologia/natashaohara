# 🚀 Guia Rápido - Colocar o Site no Ar

## ⚡ Passo a Passo Simplificado

### 1️⃣ Criar Conta no GitHub (se ainda não tem)
- Acesse: https://github.com
- Clique em "Sign up"
- Siga as instruções

### 2️⃣ Criar Novo Repositório
- Clique no botão verde "New" (ou ícone +)
- Nome do repositório: `natasha-ohara-site`
- Deixe como **Public**
- NÃO marque nenhuma opção de inicialização
- Clique em "Create repository"

### 3️⃣ Upload dos Arquivos
Na página do repositório vazio que apareceu:
- Clique em "uploading an existing file"
- Arraste TODOS os arquivos e pastas deste site
- Ou clique em "choose your files" e selecione tudo
- Adicione uma mensagem: "Site inicial Natasha O'hara"
- Clique em "Commit changes"

### 4️⃣ Ativar GitHub Pages
- No repositório, clique em "Settings" (engrenagem)
- No menu lateral esquerdo, clique em "Pages"
- Em "Source", selecione **main** (ou master) branch
- Clique em "Save"
- Aguarde alguns minutos

### 5️⃣ Acessar o Site
Seu site estará disponível em:
```
https://SEU-USUARIO.github.io/natasha-ohara-site/
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

---

## 🌐 Configurar Domínio Próprio (Opcional)

### No Registro.br:
1. Registre o domínio desejado
2. Vá em "DNS" ou "Zona de DNS"
3. Adicione estes registros:

```
Tipo: A    | Nome: @   | Valor: 185.199.108.153
Tipo: A    | Nome: @   | Valor: 185.199.109.153
Tipo: A    | Nome: @   | Valor: 185.199.110.153
Tipo: A    | Nome: @   | Valor: 185.199.111.153
Tipo: CNAME| Nome: www | Valor: SEU-USUARIO.github.io
```

### No GitHub:
1. Vá em Settings > Pages
2. Em "Custom domain", digite seu domínio
3. Clique em Save
4. Aguarde e marque "Enforce HTTPS"

⏰ **Importante:** Pode levar até 48 horas para o domínio funcionar completamente.

---

## 📸 Adicionar Feed do Instagram

### Método Mais Fácil: SnapWidget

1. Acesse: https://snapwidget.com
2. Clique em "Create Widget"
3. Escolha "Instagram Feed"
4. Preencha:
   - Username: `nattasha.ohara`
   - Layout: "Grid"
   - Photos: 6 ou 9
5. Personalize as cores
6. Copie o código gerado
7. Abra o arquivo `js/script.js` no GitHub
8. Encontre onde está escrito `placeholderHTML`
9. Substitua pelo código do SnapWidget
10. Salve

---

## ✏️ Como Fazer Alterações no Site

### Método Simples (Pelo GitHub):
1. Acesse seu repositório no GitHub
2. Navegue até o arquivo que quer editar
3. Clique no ícone de lápis (Edit)
4. Faça suas alterações
5. Clique em "Commit changes"
6. Aguarde alguns minutos - o site será atualizado automaticamente!

### Arquivos Importantes:
- `index.html` - Página principal
- `politica.html` - Página de política
- `css/styles.css` - Estilos e cores
- `js/script.js` - Funcionalidades

---

## 🆘 Problemas Comuns

### Site não aparece após ativar GitHub Pages
- Aguarde 5-10 minutos
- Verifique se escolheu o branch correto (main ou master)
- Limpe o cache do navegador (Ctrl+Shift+Del)

### Mapa do Google não carrega
- É normal. Você precisa atualizar o código do mapa
- Veja as instruções completas no README.md

### Widget do Instagram não funciona
- O widget precisa ser configurado separadamente
- Siga as instruções na seção "Adicionar Feed do Instagram" acima

### Domínio próprio não funciona
- Aguarde até 48 horas para propagação DNS
- Verifique se os registros DNS estão corretos
- Certifique-se de ter configurado no GitHub Pages também

---

## 📱 Contatos Importantes

**WhatsApp para agendamentos:**
(27) 99927-1812

**Instagram:**
@nattasha.ohara

---

## ✅ Checklist Final

- [ ] Site no GitHub Pages funcionando
- [ ] Testei em celular e computador
- [ ] Feed do Instagram configurado (ou placeholder visível)
- [ ] Links do WhatsApp funcionando
- [ ] Links do Instagram funcionando
- [ ] Mapa do Google atualizado
- [ ] Domínio próprio configurado (se aplicável)
- [ ] Testei todos os links e botões

---

**Dúvidas?** Entre em contato com quem desenvolveu o site ou consulte o README.md completo.

**Bom trabalho! 🎉**
