# English Learning Guide

## Descrição

Projeto idealizado para a disciplina de Programação Web 1 que tem como objetivo ajudar pessoas interessadas em aprender inglês por disponibilizar de forma acessível um guia de estudos dividido por cada nível do idioma definido pelo CEFR (Common European Framework of Reference for Languages).

## Objetivo

Fornecer um recurso educacional acessível e estruturado para auxiliar estudantes de inglês em sua jornada de aprendizado, organizando o conteúdo conforme os níveis estabelecidos pelo framework CEFR.

## Funcionalidades

- A **página inicial** (`/`) apresenta o projeto para quem ainda não entrou. Quem não tem conta só vê as opções de entrar ou criar conta; os níveis só abrem para quem está logado.
- A página **Níveis** lista os níveis CEFR (A1–C2), com ícone e grupo (iniciante, intermediário, avançado). Cada nível tem os assuntos essenciais de gramática, vocabulário, comunicação, phrasal verbs e expressões, organizados em **abas por categoria**.
- O aluno cria conta e faz login. Logado, ele marca cada assunto como **Preciso estudar** ou **Já domino**, e a marcação fica salva no banco de dados.
- A página **Meus estudos** mostra os assuntos marcados, em duas abas, de todos os níveis. Lá também dá para trocar ou remover a marcação.

## Tecnologias

- **Frontend:** HTML, CSS, React, React Router, React Icons
- **Backend:** Node.js, Express
- **Banco de dados:** MySQL

## Estrutura do projeto

```
projeto_ab1/
├── frontend/                 aplicação React
│   └── src/
│       ├── pages/            páginas (Home, Níveis, Nível, Meus estudos, Login, Cadastro)
│       ├── components/       componentes reutilizáveis (Layout, Navbar, Footer, StepCard, ContentCard, LevelCard, Tabs, TopicList, TopicItem)
│       └── services/api.js   chamadas à API (fetch)
└── backend/                  API + banco de dados
    ├── database/             schema.sql, topics.js (assuntos de cada nível) e setup.js
    └── src/                  rotas, controllers e config (conexão com o banco)
```

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [MySQL](https://dev.mysql.com/downloads/installer/) (MySQL Server instalado e rodando)
- Git

### 1. Clone o repositório

```
git clone https://github.com/efrancyne/speak-english
cd speak-english
```

### 2. Backend e banco de dados

```
cd backend
cp .env.example .env        # no Windows (PowerShell): copy .env.example .env
npm install
npm run db:setup            # cria o banco, as tabelas e os assuntos de cada nível
npm start                   # API em http://localhost:3001
```

No `backend/.env`, coloque em `DB_PASSWORD` a senha do usuário `root` que você definiu ao instalar o MySQL. O `npm run db:setup` pode ser repetido sem duplicar dados.

### 3. Frontend

Em outro terminal:

```
cd frontend
npm install
npm start                   # http://localhost:3000
```

Se a API estiver em outro endereço, copie `frontend/.env.example` para `frontend/.env` e ajuste `REACT_APP_API_URL`.

## Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| POST | /api/auth/register | Cadastro (`name`, `email`, `password`) |
| POST | /api/auth/login | Login (retorna `id`, `name`, `email`) |
| GET | /api/levels | Níveis A1–C2 |
| GET | /api/contents?level=A1 | Assuntos de um nível |
| GET | /api/progress/:userId | Marcações do aluno (`contentId` e `status`) |
| GET | /api/progress/:userId/contents | Assuntos que o aluno marcou (página Meus estudos) |
| PUT | /api/progress | Marca ou troca o status: `preciso_estudar` ou `dominado` (`userId`, `contentId`, `status`) |
| DELETE | /api/progress/:userId/:contentId | Remove a marcação |

## Fontes do conteúdo

Os assuntos de cada nível foram selecionados e adaptados a partir dos descritores do CEFR (Common European Framework of Reference for Languages) e das listas de gramática e vocabulário do English Grammar Profile, da Cambridge. Os títulos, as explicações e os exemplos foram escritos para este projeto.
