export type Tag = {
  slug: string;
  name: string;
  url: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
};

export type User = {
  id: string;
  firstName?: string;
  lastName?: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  image: string;
  role: "admin" | "moderator" | "user";
};

export type Comment = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
};
