import { Author } from '../../article/types/author';

export type User = Partial<Author> & { token?: string };
