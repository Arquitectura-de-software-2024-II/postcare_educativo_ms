export interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: string;
  }
  
  export const posts: Post[] = [];
  let postId = 1;
  
  export const getNextPostId = (): string => {
    return (postId++).toString();
  };