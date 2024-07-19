import axios from "axios";
import { API_URL } from "../constants/constants";

export async function unsavePost(post_id: string, save_list_ids:number[]) {
  try {
    const response = await axios.post<string>(
      `${API_URL}/save-list/unsave`,
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

    return "post unsaved successfully"

  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to unsave post");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
