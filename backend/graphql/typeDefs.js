// graphql/typeDefs.js

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Blog {
    id: ID!
    title: String!
    description: String!
    author: String!
    ratings: Int
  }

  type Query {
    getAllBlogs: [Blog]
    getBlogById(id: ID!): Blog
  }

  type Mutation {
    createBlog(title: String!, description: String!, author: String!, ratings: Int): Blog
    deleteBlog(id: ID!): Blog
  }
`;

module.exports = typeDefs;
