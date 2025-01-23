import Post from './models/Post.js';

export const resolvers = {
  Query: {
    getPosts: async () => {
      return await Post.find();
    },
    getPost: async (_: any, { id }: { id: string }) => {
      return await Post.findById(id);
    },
  },
  Mutation: {
    createPost: async (_: any, { title, content, author }: { title: string; content: string; author: string }) => {
      const newPost = new Post({
        title,
        content,
        author,
        createdAt: new Date().toISOString(),
      });
      return await newPost.save();
    },
    updatePost: async (_: any, { id, title, content, author }: { id: string; title?: string; content?: string; author?: string }) => {
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { title, content, author },
        { new: true }
      );
      if (!updatedPost) throw new Error('Post not found');
      return updatedPost;
    },
    deletePost: async (_: any, { id }: { id: string }) => {
      const deletedPost = await Post.findByIdAndDelete(id);
      if (!deletedPost) throw new Error('Post not found');
      return `Post with id ${id} deleted successfully`;
    },
  },
};
