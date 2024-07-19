import axios, { AxiosError } from "axios";
import { API_URL } from "../constants/constants";
import { Blogs as BlogType } from "../types";
import { SaveList } from "./getSaveLists";

export async function getBlogs() {
  try {
    const response = await axios.get<{ blogs: BlogType[] }>(
      `${API_URL}/blog/bulk`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );
    const allBlogs = response.data.blogs;

    return allBlogs;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch blogs");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
