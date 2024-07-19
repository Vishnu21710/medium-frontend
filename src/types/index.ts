import { SaveList } from "@/queryFns/getSaveLists";

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt?: string;
}

export interface Blogs {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  user?: User;
  createdAt?: string;
  save_lists?: SaveList[]
}
