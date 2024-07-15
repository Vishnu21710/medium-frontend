import moment from 'moment'
import { Avatar } from '../BlogCard/BlogCard'
type Props = {
    author: string,
    createdAt?:string,
    time?:string
}

const BlogAuthor = ({author, createdAt, time}: Props) => {

    const date = new Date(createdAt||"")

    return (
        <div className='flex gap-3 my-3'>
            <Avatar size='large' name={author} />
            <div className=''>
                <p className='text-md'>{author}  {"·"} <span className='text-green-400 cursor-pointer'>Follow</span></p>
                <p className='text-sm text-gray-500'>{time} · {moment(date).format("MMM Do YYYY")}</p>
            </div>
        </div>
    )
}

export default BlogAuthor