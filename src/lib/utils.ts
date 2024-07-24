import { API_URL } from "@/constants/constants";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateString = (string: string, truncateValue: number):string => {
  if(string.length > truncateValue){
    return `${string.substring(0,truncateValue)}...`
  }
  return string
};


export const upload = async (image:File | null) => {
  const formData = new FormData()
  if(image){
      formData.append('file', image)
  }
  const result = await axios.post(`${API_URL}/uploads?resize=true`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
  })

  const image_id = result.data.image.id
  console.log(result.data);
  
  return image_id
}