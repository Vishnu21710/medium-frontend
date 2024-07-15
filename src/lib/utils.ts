import axios, { all } from "axios";
import { API_URL } from "../constants/constants";

export const login = async(email:string, password: string)=>{
    try {
        const response = await axios.post(`${API_URL}/user/signup`, {
            email,
            password
        })
        const jwt = response.data

        return jwt

    } catch (error) {
        alert(error)
    }
}

export const getBlogs = async()=>{
    const allBlogs = (await axios.post(`${API_URL}/blogs/bulk`)).data
    
    return allBlogs
}