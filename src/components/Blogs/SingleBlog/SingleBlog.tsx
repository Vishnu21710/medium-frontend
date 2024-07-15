import BlogHeader from './BlogHeader'
import { Blog } from '../../../hooks'

type Props = {
    title: string,
    createdAt?:string,
    time?: string
    content: string
    author : string
}

const SingleBlog = ({author, title, content, createdAt, time}: Props) => {
  return (
    <div className='w-full '>
        <BlogHeader author={author} title={title} createdAt={createdAt} time={time}/>
    </div>
  )
}

export default SingleBlog