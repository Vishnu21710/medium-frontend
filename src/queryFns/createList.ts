import axios from "axios";
import { API_URL } from "../constants/constants";
import { SaveList } from "./getSaveLists";

export async function createList(title:string) {
  try {

    const response = await axios.post<SaveList>(
      `${API_URL}/save-list`,
      {
       title
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );

    return response.data

  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to create save list");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
