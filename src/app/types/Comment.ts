import { User } from './User';

export type Comment = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: User;
};
