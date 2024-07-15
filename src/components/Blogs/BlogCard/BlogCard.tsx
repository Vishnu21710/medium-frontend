import clsx from "clsx"
import moment from "moment"
import { Link } from "react-router-dom"
import BlogMeta from "./BlogMeta"

type Props = {
    author: string,
    title: string,
    content: string
    publishedAt?: string
    id: string,
    
}

const BlogCard = ({ author, content, title, publishedAt, id }: Props) => {

    const date = new Date(publishedAt || "")

    console.log(publishedAt, 'date');
    


    return (
        <div className="block border-b-[1px] border-slate-200/70">
            <Link to={`/blogs/${id}`} className="flex gap-x-4 items-center justify-between space-y-5   pt-5 pb-3">
                <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                        <Avatar size="small" name={author} />
                        <p className="text-sm text-gray-800 cursor-pointer">{author} </p>
                        <p>·</p>
                        <p className="text-sm text-gray-600 cursor-pointer">{publishedAt && moment(date).format("MMM Do YY")}</p>
                    </div>
                    <div className="space-y-2 cursor-pointer">
                        <p className="sm:text-2xl text-xl font-bold">
                            {title}
                        </p>
                        <p className="text-md text-gray-500">
                            {`${content.substring(0, 280)} ${content.length > 280 && "..."}`}
                        </p>
                    </div>

                </div>
                <div className="flex-none">
                    <img className="sm:h-[130px] sm:w-[170px] rounded-sm h-[70px] w-[100px]" src="https://plus.unsplash.com/premium_photo-1720760948879-d10510c7049c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </Link>
            <div>
                <BlogMeta content={content} publishedAt={publishedAt} />
            </div>
        </div>
    )
}

export const Avatar = ({ name, size = "small", className }: { name: string, size?: "small" | "medium" | "large", className?: string }) => {
    return (
        <div className={clsx('relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600', size === "small" ? "w-7 h-7" : size === "medium" ? "w-9 h-9" : "w-11 h-11", className)}>
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
        </div>
    )
}

export default BlogCard