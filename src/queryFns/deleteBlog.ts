import axios, { AxiosError } from "axios";
import { API_URL } from "../constants/constants";
import { Blogs as BlogType } from "../types";

export async function deleteBlog(id: string | undefined) {
  try {
    const response = await axios.delete<BlogType>(`${API_URL}/blog`, {
      data: {
        id,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    const blog = response.data;


    return blog;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to delete blogs");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
