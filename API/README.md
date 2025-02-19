# Jiraiya Store API - GraphQL

Esta é uma API GraphQL simples para listar os livros escritos por Jiraiya no anime Naruto.

## 🚀 Tecnologias Utilizadas

- Node.js
- Apollo Server (GraphQL)
- @faker-js/faker

## 📌 Como Rodar o Projeto

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/jiraiya-store-api.git
cd jiraiya-store-api
```

### 2️⃣ Instalar as Dependências
```bash
npm install
```

### 3️⃣ Iniciar o Servidor
```bash
node index.js
```
Após rodar o comando, o servidor estará disponível no terminal com uma URL, geralmente:

🚀 Server ready at http://localhost:4000/

Acesse essa URL no navegador para abrir o Playground GraphQL e testar as queries.

## 🔍 Exemplos de Queries
Buscar todos os livros

```bash
query {
  products {
    name
    description
    category
  }
}
```

Filtrar livros por categoria
```bash
{
  productsByCategory(category: "books") {
    name
    description
  }
}
```

