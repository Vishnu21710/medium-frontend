import axios from "axios";
import { API_URL } from "../constants/constants";
import { SaveList } from "./getSaveLists";

export async function updateList(id: number, title: string) {
  try {
    const response = await axios.put<SaveList>(
      `${API_URL}/save-list/${id}`,
      {
        title,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );
    console.log(response.data,'FROM SAVELIST UPDATE');
    
    return response.data;
  } catch (error) {
    console.log(error);

    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to delete save list"
      );
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
