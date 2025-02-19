const { ApolloServer, gql } = require('apollo-server')
const { faker } = require('@faker-js/faker');


const baseProducts = [
    { name: 'Make-Out Paradise', description: faker.lorem.paragraph(), image_url: '', category: 'books' },
    { name: 'Make-Out Violence', description: faker.lorem.paragraph(), image_url: '', category: 'books' },
    { name: 'Make-Out Tactics', description: faker.lorem.paragraph(), image_url: '', category: 'books' },
    { name: 'Make-Out Play', description: faker.lorem.paragraph(), image_url: '', category: 'books' }
  ];
  

// ESQUEMAS
const typeDefs = gql`
    type Product {
        name: String
        description: String
        image_url: String
        category: String
    }

    type Query {
        # vai retornar todos os libros
        products: [Product] 
        # retorna livros por categorias
        productsByCategory(category: String!) : [Product]
    }  
`;

// RESOLVERS
const resolvers = {
    Query: {
      products: () => baseProducts, // Retorna todos os livros
      productsByCategory: (_, { category }) => baseProducts.filter(product => product.category === category) // Filtra livros por categoria
    }
  };
  

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})