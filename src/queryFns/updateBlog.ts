import axios from "axios";
import { API_URL } from "../constants/constants";
import { Blogs as BlogType } from "../types";

export async function updateBlog(title:string|undefined, description:string|undefined, content:string|undefined, image_id:number | undefined, blog_id:string) {
  try {
    const response = await axios.put<{ blogs: BlogType }>(
      `${API_URL}/blog`,
      {
        title,
        description,
        content, 
        image_id,
        id: blog_id
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
      throw new Error(error.response?.data?.message || "Failed to update blog");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
