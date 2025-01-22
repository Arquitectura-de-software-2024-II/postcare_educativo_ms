export const typeDefs = `#graphql
  type Post {
    id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: String!
  }

  type Query {
    getPosts: [Post!]!
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!, content: String!, author: String!): Post!
    updatePost(id: ID!, title: String, content: String, author: String): Post!
    deletePost(id: ID!): String!
  }
`;