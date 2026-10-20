# Estudos de React e JavaScript

Projeto simples para praticar React e JavaScript com Vite, Tailwind CSS e React Router.

## Português

### Requisitos

- Node.js 22.22 ou mais recente.
- npm 10 ou mais recente (incluído nas versões atuais do Node.js).

Confira as versões instaladas:

```bash
node --version
npm --version
```

### Instalação e execução

Na pasta do projeto, execute:

```bash
npm install
npm run dev
```

Abra no navegador o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

### Arquivos para praticar

- `src/App.jsx`: página inicial e rotas.
- `src/components/Counter.jsx`: componente de contador e exemplo de `useState`.
- `src/index.css`: estilos globais e importação do Tailwind CSS.
- `src/main.jsx`: ponto de entrada do React e configuração do React Router.

### Build, preview e lint

```bash
npm run build
npm run preview
npm run lint
```

O build de produção é criado na pasta `dist`.

### Publicar em um novo repositório no GitHub

Crie um repositório vazio no GitHub, sem adicionar README, `.gitignore` ou licença. Depois, na pasta do projeto, execute (substitua a URL pelo endereço do seu repositório):

```bash
git add .
git commit -m "Cria projeto de estudos em React"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

O arquivo `.gitignore` já impede o envio de `node_modules`, `dist` e arquivos locais. O `package-lock.json` deve ser enviado ao GitHub para manter as versões instaladas consistentes.

---

## English

### Requirements

- Node.js 22.22 or newer.
- npm 10 or newer (included with current Node.js versions).

Check the installed versions:

```bash
node --version
npm --version
```

### Install and run

From the project directory, run:

```bash
npm install
npm run dev
```

Open the address shown by Vite in your browser, usually `http://localhost:5173`.

### Files to edit while learning

- `src/App.jsx`: home page and routes.
- `src/components/Counter.jsx`: counter component and `useState` example.
- `src/index.css`: global styles and the Tailwind CSS import.
- `src/main.jsx`: React entry point and React Router setup.

### Build, preview, and lint

```bash
npm run build
npm run preview
npm run lint
```

The production build is generated in the `dist` directory.

### Publish to a new GitHub repository

Create an empty repository on GitHub without adding a README, `.gitignore`, or license. Then run the following commands from the project directory (replace the URL with your repository address):

```bash
git add .
git commit -m "Create React study project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

The included `.gitignore` prevents `node_modules`, `dist`, and local files from being uploaded. Commit `package-lock.json` so installed dependency versions remain consistent.
