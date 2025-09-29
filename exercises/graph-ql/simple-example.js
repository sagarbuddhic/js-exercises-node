import { ApolloServer, gql } from "apollo-server";

// Schema (what data can be queried)
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// Resolvers (how to fetch the data)
const resolvers = {
  Query: {
    books: () => [
      { title: "GraphQL Basics", author: "Alice" },
      { title: "Advanced GraphQL", author: "Bob" },
    ],
  },
};

// Create server
const server = new ApolloServer({ typeDefs, resolvers });

// Start server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
