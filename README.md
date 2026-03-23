# 🔐 Fullstack JWT Auth: Node.js & React

Este projeto é uma aplicação **Fullstack** completa focada em um fluxo de autenticação robusto e seguro. O objetivo foi construir um ecossistema onde o usuário pudesse se cadastrar, realizar login e acessar áreas restritas, garantindo que a comunicação entre o frontend e o backend seguisse as melhores práticas de segurança e arquitetura.

## 📝 O que o projeto faz?

A aplicação resolve o problema de gerenciamento de acesso de usuários através de um fluxo ponta a ponta:

* **Autenticação Segura:** Protege as senhas dos usuários utilizando hashing (Bcrypt) no banco de dados, garantindo que dados sensíveis nunca sejam armazenados em texto puro.
* **Controle de Sessão via JWT:** Utiliza JSON Web Tokens para manter o usuário conectado de forma *stateless*, permitindo que o servidor valide a identidade do usuário em cada requisição sem a necessidade de armazenar sessões em memória.
* **Proteção de Rotas (Frontend):** Implementa um sistema de "Guarda de Rotas" no React, onde páginas protegidas (como a Home) só são renderizadas se houver um token válido, redirecionando automaticamente usuários não autenticados.
* **Tratamento de Erros Profissional:** Fornece feedbacks claros ao usuário (ex: "Senha incorreta" ou "Usuário já existe") enquanto mantém logs técnicos no servidor para depuração.

---

## ⚙️ Como Executar o Projeto

Para rodar esta aplicação localmente, você precisará ter instalado o **Node.js** e um gerenciador de pacotes (NPM ou Yarn), além de um banco de dados **MySQL**.

### 1. Clone o Repositório
```bash
git clone https://github.com/filipi-lima/fullstack-jwt-auth.git
cd fullstack-jwt-auth
```

### 2. Configuração do Backend
1. Navegue até a pasta do servidor: `cd backend`
   
3. Instale as dependências: `npm install`

4. Crie um arquivo `.env` na raiz da pasta `backend` e preencha com suas credenciais:
   ```env
    DB_NAME = nome_do_banco <br>
    DB_USER = root <br>
    DB_PASS = sua_senha_do_banco <br
    DB_HOST = localhost <br>
    DB_PORT = 3306 <br>
    PORT = 8080 <br>
    NODE_ENV = development <br>
    SECRET = sua_secret <br>
   ```
   
5. Execute as Migrations para criar as tabelas:
   ```bash
   npx sequelize-cli db:migrate
   ```
   
6. Caso queira adicionar usuários fictícios ao banco de dados, execute este código:
   ```bash
   npx sequelize-cli db:seed:all
   ```
   A senha de cada usuário fictício gerado nesse código será "123456789"
   
7. Inicie o servidor: `npm run dev`

### 3. Configuração do Frontend
1. Abra um novo terminal e navegue até a pasta do cliente: `cd frontend`
2. Instale as dependências: `npm install`
3. Verifique se o arquivo `api.js` está apontando para a URL correta do backend (`http://localhost:8080`)
4. Inicie a aplicação: `npm run dev`

Veja mais sobre mim e meus projetos no [LinkedIn](https://www.linkedin.com/in/filipi-pinheiro-6434433a6/)

Esse foi o resultado final. O que achou?
