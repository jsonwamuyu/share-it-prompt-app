// graphql/typeDefs.js

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User{
    id:ID!
    fullName:String!
    email:String!
    age:Int
  }

  type Blog {
    id: ID!
    title: String!
    description: String!
    author: String!
    ratings: Int
  }

  type Query {
    users:[User]
    user(id:ID!):User

    getAllBlogs: [Blog]
    getBlogById(id: ID!): Blog
  }

  type Mutation {
    createUser(fullName:String!, email:String!, age:Int):User
    deleteUser(id:ID!):User
    createBlog(title: String!, description: String!, author: String!, ratings: Int): Blog
    deleteBlog(id: ID!): Blog
  }
`;

module.exports = typeDefs;
