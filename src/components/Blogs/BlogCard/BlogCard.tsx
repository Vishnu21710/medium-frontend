import clsx from "clsx"
import moment from "moment"
import { Link } from "react-router-dom"
import BlogMeta from "./BlogMeta"
import { SaveList } from "@/queryFns/getSaveLists"
import { useScreenSize } from "@/hooks/useScreenSize"
import { truncateString } from "@/lib/utils"

type Props = {
    author: string,
    title: string,
    content: string
    publishedAt?: string
    id: string,
    saveLists?: SaveList[]
    
}

const BlogCard = ({ author, content, title, publishedAt, id, saveLists }: Props) => {

    const date = new Date(publishedAt || "")

    const {size} = useScreenSize()

    let description  = content
    let postTitle = title

    switch(size){
        case "sm":
            description = truncateString(description, 50)
            postTitle = truncateString(postTitle, 50)
            break;
        case "md":
            description = truncateString(description, 90)
            postTitle = truncateString(postTitle, 90)
            break;
        default: 
            description = truncateString(description, 98)
            postTitle = truncateString(postTitle, 98)

    }

    return (
        <div className="block border-b-[1px] border-slate-200/70 py-4">
            <Link to={`/blogs/${id}`} className="flex sm:gap-x-4 gap-x-3 items-center justify-between space-y-5   pt-5 pb-3">
                <div className="space-y-4">
                    <div className="flex gap-3 items-center ">
                        <Avatar size="small" name={author} />
                        <p className="text-xs text-gray-800 cursor-pointer">{author} </p>
                    </div>
                    <div className="space-y-2 cursor-pointer">
                        <p className="sm:text-[21px] text-xl font-extrabold text-gray-700">
                            {postTitle}
                        </p>
                        <p className="sm:text-md text-sm text-gray-500">
                            {description}
                        </p>
                    </div>

                </div>
                <div className="flex-none">
                    <img className="sm:h-[130px] sm:w-[170px] rounded-sm h-[70px] w-[100px]" src="https://plus.unsplash.com/premium_photo-1720760948879-d10510c7049c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </Link>
            <div className="">
                <BlogMeta content={content} publishedAt={publishedAt} id={id} saveLists={saveLists}/>
            </div>
        </div>
    )
}

export const Avatar = ({ name, size = "small", className }: { name: string, size?: "small" | "medium" | "large", className?: string }) => {
    return (
        <div className={clsx('relative p-3 inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ', size === "small" ? "w-4 h-4" : size === "medium" ? "w-9 h-9" : "w-11 h-11", className)}>
            <span className="font-normal  text-sm text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
        </div>
    )
}

export default BlogCard