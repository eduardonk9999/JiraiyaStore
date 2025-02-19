Jiraiya Store API - GraphQL

Esta é uma API GraphQL simples para listar os livros escritos por Jiraiya no anime Naruto.

🚀 Tecnologias Utilizadas

Node.js

Apollo Server (GraphQL)

@faker-js/faker

📌 Como Rodar o Projeto

1️⃣ Clonar o Repositório

git clone https://github.com/seu-usuario/jiraiya-store-api.git
cd jiraiya-store-api

2️⃣ Instalar as Dependências

npm install

3️⃣ Iniciar o Servidor

node index.js

Após rodar o comando, o servidor estará disponível no terminal com uma URL, geralmente:

🚀  Server ready at http://localhost:4000/

Acesse essa URL no navegador para abrir o Playground GraphQL e testar as queries.

🔍 Exemplos de Queries

Buscar todos os livros

{
  products {
    name
    description
    category
  }
}

Filtrar livros por categoria

{
  productsByCategory(category: "books") {
    name
    description
  }
}

📄 Estrutura do Projeto

├── node_modules
├── package.json
├── package-lock.json
├── index.js
└── README.md

🛠 Possíveis Erros e Soluções

1️⃣ Erro MODULE_NOT_FOUND para o faker

Solução: Instale a versão correta do pacote:

npm install @faker-js/faker

E altere no código:

const { faker } = require('@faker-js/faker');

Agora a API está pronta para ser utilizada! 🎉

