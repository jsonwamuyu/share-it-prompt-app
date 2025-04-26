// graphql/resolvers.js

const blogs = require("../data/blogs");
const users = require("../data/users");

const resolvers = {
  Query: {
    users:()=>users,
    user:(_, {id})=>users.find((user) => user.id === Number(id)),
    getAllBlogs: () => blogs,
    getBlogById: (_, { id }) => blogs.find((blog) => blog.id === Number(id)),
  },
  Mutation: {
    createBlog: (_, { title, description, author, ratings }) => {
      const newBlog = {
        id: blogs.length + 1,
        title,
        description,
        author,
        ratings,
      };
      blogs.push(newBlog);
      return newBlog;
    },
    deleteBlog: (_, { id }) => {
      const index = blogs.findIndex((blog) => blog.id === Number(id));
      if (index === -1) throw new Error("Blog not found");
      const deleted = blogs.splice(index, 1);
      return deleted[0];
    },
  },
};

module.exports = resolvers;
