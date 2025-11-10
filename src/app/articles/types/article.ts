import { Author } from './author';

export type Article = {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  author: Author;
  favoritesCount: number;
  favorited: boolean;
};
