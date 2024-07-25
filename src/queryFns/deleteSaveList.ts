import axios from "axios";
import { API_URL } from "../constants/constants";
import { SaveList } from "./getSaveLists";

export async function deleteSaveList(id: number) {
  try {
    const response = await axios.delete<SaveList>(
      `${API_URL}/save-list/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );

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
