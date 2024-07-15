import axios from "axios";
import { API_URL } from "../constants/constants";

export type SaveList = {
  title: string;
  id: number;
};

export const getSaveLists = async () => {
  try {
    const saveLists = await axios.get<{save_lists: SaveList[]}>(`${API_URL}/save-list`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    return saveLists.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
};
