
# Prática 01

**Aluno:** Marcos Vinicius Nascimento Souza

**Disciplina:** Programação WEB II

## Descrição do Projeto

Esta prática consiste no desenvolvimento de uma aplicação web full-stack com frontend em React/Vite e backend em Node.js. O projeto integra um cliente web responsivo com um servidor que gerencia dados persistidos em banco de dados JSON.

## Estrutura do Projeto

```
pratica-01/
├── app/
│   ├── backend/
│   │   ├── .gitignore
│   │   ├── package.json
│   │   └── db/
│   │       └── db.json
│   └── frontend/
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── index.html
│       ├── package.json
│       ├── vite.config.js
│       ├── public/
│       └── src/
│           ├── App.css
│           ├── App.jsx
│           ├── index.css
│           ├── main.jsx
│           ├── assets/
│           └── components/
│               ├── Card.css
│               ├── Card.jsx
│               ├── SearchBar.css
│               └── SearchBar.jsx
└── README.md
```

## Como Inicializar

### Backend
```bash
cd app/backend/db
px json-server db.json
```

### Frontend
```bash
cd app/frontend
npm i
npm run dev
```
