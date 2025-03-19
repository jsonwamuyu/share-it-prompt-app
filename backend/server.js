// We need apollo-server-express to integrate Apollo Server with Express
// we need graphql-tools to create a schema from our type definitions(define data structure) and resolvers(functions to handle the queries and mutations)

const express = require("express");
const { graphql } = require("graphql");
const { ApolloServer, gql } = require("apollo-server-express");

const tasks = [
  {
    id: 1,
    text: "Learn React.js - This is really awesome, we make things happen.",
    completed: false,
  },
  { id: 2, text: "Learn GraphQL - a new thing to do", completed: true },
  { id: 3, text: "Learn TypeScript - also i love this", completed: false },
];

const app = express();

// type Task → Defines a Task object with id, text, and completed fields.
// type Query → Defines a getTasks query to fetch an array of Task objects.

const typeDefs = gql`
    type Task{
    id:ID!
    title:String!
    completed:Boolean!
    }

    type Query{
        getTasks:[Task]
    }

`;

const resolvers = {
  Query: {
    getTasks: () => {
      return tasks;
    },
  },
};

// Connect Apollo Server to Express

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}


startServer();