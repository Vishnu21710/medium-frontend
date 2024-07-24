import axios from "axios";
import { API_URL } from "../constants/constants";
import { Image } from "@/types";

export type SaveList = {
  title: string;
  id: number;
  posts: {
    id: string,
    title: string,
    publishedAt: string,
    description:string,
    image:Image
    content:string,
    user:{
      name:string
    }
  }[],
  user:{
    name:string
  }
};

export const getSaveLists = async () => {
  try {
    const saveLists = await axios.get<{save_lists: SaveList[]}>(`${API_URL}/save-list`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    return saveLists.data.save_lists;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
};
