import axios, { AxiosError } from "axios";
import { API_URL } from "../constants/constants";
import { Blogs as BlogType } from "../types";
import { SaveList } from "./getSaveLists";

export async function createBlogs(title:string, description:string, content:string, image_id:number) {
  try {
    const response = await axios.post<{ blogs: BlogType }>(
      `${API_URL}/blog`,
      {
        title,
        description,
        content, 
        image_id
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );
    const blog = response.data;

    return blog;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to create blog");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
