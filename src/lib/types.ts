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


export type TestListItem = {
  id: string;
  title: string;
  author: string;
  description?: string | null;
  category?: string | null;
  slug: string;
  questions: number;
  created_at: string;
}
