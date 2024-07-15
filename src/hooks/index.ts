import { useEffect, useState } from "react";
import { Blogs as BlogType, User as UserType } from "../types";
import axios from "axios";
import { API_URL } from "../constants/constants";

export type Blog = Pick<
  BlogType,
  "content" | "title" | "user" | "id" | "createdAt"
>;

export type User = Pick<UserType, "id" | "email" | "name">;

export const useGetBlogs = (): {
  data: BlogType[] | [];
  isLoading: boolean;
  error: any;
} => {
  const [blogs, setBlogs] = useState<BlogType[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const header = `Authorization: Bearer ${localStorage.getItem("jwt")}`;

  const token = localStorage.getItem("jwt");
  console.log(token, "jwt");

  useEffect(() => {
    async function getBlogs(): Promise<void> {
      setIsLoading(true);
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
        setBlogs(allBlogs);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }

    getBlogs();
  }, []);

  return {
    data: blogs,
    isLoading,
    error,
  };
};

export const useBlog = (
  id: string | undefined
): { data: Blog | null; isLoading: boolean; error: any } => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getBlog = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_URL}/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });

        const blog = response.data;
        setBlog(blog);
      } catch (error) {
        console.log(error, "get blog error");

        setError(error);
      }
      setIsLoading(false);
    };
    getBlog();
  }, [id]);

  return {
    data: blog,
    isLoading,
    error,
  };
};

export const useGetIdendity = ():{data:User | null, isLoading:boolean, error:any} => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const jwt = localStorage.getItem("jwt") 

  

  useEffect(() => {
    const getUser = async()=>{
      setIsLoading(true)
      try {
        const response = await axios.get<{user:User}>(`${API_URL}/user/get-user?token=${jwt}`)
        const user = response.data?.user
        
        if(response.status === 403){
          setError("Unauthorized")
        }
        
        setUser({
          email: user.email,
          name: user.name,
          id: user.id
        })
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }
    getUser()
  }, [jwt]);

 
  return {
    data:user,
    isLoading,
    error
  }
};
