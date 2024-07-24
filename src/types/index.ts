import { SaveList } from "@/queryFns/getSaveLists";

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt?: string;
}

export interface Image {
  id:number,
  thumbnail: string,
  small: string,
  original: string
}

export interface Blogs {
  id: string;
  title: string;
  content: string;
  description?:string,
  image_id?:number,
  image: Image
  published: boolean;
  authorId: string;
  user?: User;
  createdAt?: string;
  save_lists?: SaveList[]
}
