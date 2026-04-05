# Eduardo's Restaurante 🍽️

Sistema completo de cardápio digital com pedidos em tempo real via Firebase.

---

## 📁 Estrutura do Projeto

```
eduardos-restaurante/
├── index.html          # App principal (PWA)
├── manifest.json       # Configuração PWA (ícone, nome, tema)
├── apple-touch-icon.png # Ícone para iOS
├── firebase.json       # Configuração do Firebase Hosting
├── .firebaserc         # Projeto Firebase vinculado
├── .gitignore
└── icons/
    ├── icon-16x16.png
    ├── icon-32x32.png
    ├── icon-76x76.png
    ├── icon-120x120.png
    ├── icon-152x152.png
    ├── icon-167x167.png
    ├── icon-180x180.png
    ├── icon-192x192.png
    └── icon-512x512.png 
```

---

## 🔥 Passo a Passo — Firebase Hosting

### PRÉ-REQUISITO: Ter o Node.js instalado
Baixe em: https://nodejs.org (versão LTS)

---

### PASSO 1 — Instalar o Firebase CLI

Abra o terminal e execute:

```bash
npm install -g firebase-tools
```

Verifique a instalação:

```bash
firebase --version
```

---

### PASSO 2 — Fazer login no Firebase

```bash
firebase login
```

Vai abrir o navegador pedindo login com sua conta Google.
Use a mesma conta que tem acesso ao projeto `restaurante-inteligente-f3cf5`.

---

### PASSO 3 — Acessar a pasta do projeto

```bash
cd caminho/para/eduardos-restaurante
```

Exemplo no Windows:
```bash
cd C:\Users\SeuNome\Downloads\eduardos-restaurante
```

Exemplo no Mac/Linux:
```bash
cd ~/Downloads/eduardos-restaurante
```

---

### PASSO 4 — Verificar se o projeto está vinculado

```bash
firebase projects:list
```

Você verá o projeto `restaurante-inteligente-f3cf5` na lista.
O arquivo `.firebaserc` já está configurado para apontar para ele.

---

### PASSO 5 — Fazer o Deploy

```bash
firebase deploy --only hosting
```

Aguarde o processo terminar. Você verá algo assim:

```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/restaurante-inteligente-f3cf5/overview
Hosting URL: https://restaurante-inteligente-f3cf5.web.app
```

---

### PASSO 6 — Acessar o site

Acesse pelo celular:
```
https://restaurante-inteligente-f3cf5.web.app
```

O navegador vai perguntar se deseja **"Adicionar à tela inicial"** — é o ícone do Eduardo's Restaurante que aparecerá na tela do celular.

---

## 📱 Como instalar no celular (PWA)

### Android (Chrome):
1. Acesse o link do site
2. Toque nos 3 pontos no canto superior direito
3. Toque em **"Adicionar à tela inicial"**
4. Confirme — o ícone do Eduardo's aparece na tela

### iPhone (Safari):
1. Acesse o link no **Safari** (obrigatório — não funciona no Chrome no iOS)
2. Toque no botão **Compartilhar** (quadrado com seta para cima)
3. Role e toque em **"Adicionar à Tela de Início"**
4. Confirme — o ícone do Eduardo's aparece na tela

---

## 🛠️ Atualizar o site depois de mudanças

Sempre que editar o `index.html` ou qualquer arquivo, rode:

```bash
firebase deploy --only hosting
```

---

## 🔑 Configuração Firebase (já integrada no index.html)

O projeto já usa:
- **Firebase Firestore** — banco de dados em tempo real
- **Firebase Hosting** — hospedagem dos arquivos

Projeto: `restaurante-inteligente-f3cf5`

---

## ⚠️ Problemas comuns

**"command not found: firebase"**
→ Node.js não está instalado ou o npm não está no PATH. Reinstale o Node.js.

**"Permission denied"**
→ No Mac/Linux, use `sudo npm install -g firebase-tools`

**"Project not found"**
→ Verifique se fez login com a conta correta: `firebase login --reauth`

**O ícone não aparece no iPhone**
→ Use obrigatoriamente o Safari para adicionar à tela inicial.
