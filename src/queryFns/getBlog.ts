import axios from "axios";
import { API_URL } from "../constants/constants";
import { Blogs as BlogType } from "../types";

export async function getBlog(id:string | undefined) {
  try {
    const response = await axios.get<BlogType>(
      `${API_URL}/blog/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );
    const blog = response.data;

    console.log(blog);
    

    return blog;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch blogs");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
