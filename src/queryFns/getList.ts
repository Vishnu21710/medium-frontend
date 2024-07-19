import axios from "axios";
import { API_URL } from "../constants/constants";
import { SaveList } from "./getSaveLists";

type GetList = SaveList & {_count: {
    posts:number
}, createdAt:string}

export async function getList(id:number, page?:number, pageSize?:number) {
  try {

    const response = await axios.get<GetList>(
      `${API_URL}/save-list/${id}?pageSize=${pageSize}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );

    console.log(response.data);
    
    return response.data

  } catch (error) {
    console.log(error);
    
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch save list");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
