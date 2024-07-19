import axios from "axios";
import { API_URL } from "../constants/constants";

export async function savePost(post_id: string, save_list_ids:number[]) {
  try {

    const response = await axios.post<string>(
      `${API_URL}/save-list/save`,
      {
        post_id,
        save_list_ids
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );


  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to save post");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
