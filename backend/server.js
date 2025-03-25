// We need apollo-server-express to integrate Apollo Server with Express
// we need graphql-tools to create a schema from our type definitions(define data structure) and resolvers(functions to handle the queries and mutations)

const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const tasks = [
  {
    id: 1,
    text: "Learn React.js - This is really awesome, we make things happen.",
    completed: false,
    created_at: "2025-02-22T06:08:11Z",
  },
  {
    id: 2,
    text: "Learn GraphQL - a new thing to do",
    completed: true,
    created_at: "2025-02-22T02:98:56Z",
  },
  {
    id: 3,
    text: "Learn TypeScript - also i love this",
    completed: false,
    created_at: "2025-02-22T07:08:56Z",
  },
  {
    id: 4,
    text: "Understand GraphQl",
    completed: true,
    created_at: "2025-02-22T11:07:07Z",
  },
  {
    id: 5,
    text: "Physical fitness today (5pm) ",
    completed: false,
    created_at: "2025-02-22T10:00:00Z",
  },
];

const app = express();



// Define how our data should look like, different queries that are gonna be used to get the data, and different mutations that gonna alter the data

// type Task → Defines a Task object with id, text, and completed fields.
// type Query → This is where you define queries for Task objects.


// const typeDefs = gql`

//   type Task {
//     id: ID!
//     text: String!
//     completed: Boolean!
//     created_at: String!
//   }

//   type User {
//     id:ID!
//     fullname: String!
//     email:String!
//   }

//   type Query {
//     getTasks: [Task]
//     getCompletedTasks: [Task]
//     getIncompleteTasks: [Task]
//     searchTask(keyword: String!): [Task]
//   }

//   type Mutation {
//     addTask(text: String!): Task
//     updateTask(id:ID!):Task
//     completeTask(id: ID!): Task
//     removeTask(id: ID!): Task
//   }
// `;

// const resolvers = {
//   Query: {
//     getTasks: () => tasks,
//     getCompletedTasks: () => tasks.filter((task) => task.completed),
//     getIncompleteTasks: () => tasks.filter((task) => !task.completed),
//     searchTask: (_, { keyword }) =>
//       tasks.filter((task) =>
//         task.text.toLowerCase().includes(keyword.toLowerCase())
//       ),
//   },
//   Mutation:{}
// };

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
