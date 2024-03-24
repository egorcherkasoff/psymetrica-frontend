export enum Theme {
  primary = "primary",
  secondary = "secondary",
  dark = "dark",
}

export type Pagination = {
  count: number;
  next: number | null;
  previous: number | null;
}

export type User = {
  id: string;
  name: string;
  avatar: string;
}

export type TestListItem = {
  id: string;
  title: string;
  author: User;
  description?: string | null;
  category?: string | null;
  slug: string;
  questions: number;
  created_at: string;
}


export type UserProfile = {
  id: string;
  name: string;
  avatar: string;
  tests: TestListItem[] | null;
}