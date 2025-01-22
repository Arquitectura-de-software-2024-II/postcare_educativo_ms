import { posts, getNextPostId } from "./database.js";

export const resolvers = {
  Query: {
    getPosts: () => posts,
    getPost: (_: any, { id }: { id: string }) => posts.find(post => post.id === id),
  },
  Mutation: {
    createPost: (_: any, { title, content, author }: { title: string; content: string; author: string }) => {
      const newPost = {
        id: getNextPostId(),
        title,
        content,
        author,
        createdAt: new Date().toISOString(),
      };
      posts.push(newPost);
      return newPost;
    },
    updatePost: (_: any, { id, title, content, author }: { id: string; title?: string; content?: string; author?: string }) => {
      const postIndex = posts.findIndex(post => post.id === id);
      if (postIndex === -1) throw new Error('Post not found');

      const updatedPost = {
        ...posts[postIndex],
        title: title || posts[postIndex].title,
        content: content || posts[postIndex].content,
        author: author || posts[postIndex].author,
      };
      posts[postIndex] = updatedPost;
      return updatedPost;
    },
    deletePost: (_: any, { id }: { id: string }) => {
      const postIndex = posts.findIndex(post => post.id === id);
      if (postIndex === -1) throw new Error('Post not found');
      posts.splice(postIndex, 1);
      return `Post with id ${id} deleted successfully`;
    },
  },
};