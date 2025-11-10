import { Author } from '../../articles/types/author';

export type User = Partial<Author> & { token?: string };
