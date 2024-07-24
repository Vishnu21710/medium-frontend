import { Image } from '@/types'
import BlogAuthor from './BlogAuthor'
import Markdown from 'react-markdown'

type Props = {
  title: string
  author: string
  createdAt?: string
  time?: string
  description?: string
  image: string,
  content: string
}

const BlogHeader = ({ title, author, createdAt, time, description, content, image }: Props) => {
  return (
    <div className='flex flex-col sm:gap-9 gap-3 '>
      <h2 className='sm:text-4xl text-3xl font-bold text-slate-800 '>{title}</h2>
      <p className='text-sm text-gray-400'>{description}</p>
      <BlogAuthor author={author} createdAt={createdAt} time={time} />
      <div className='w-full min-h-48 '>
        <img src={image} alt="" className='object-cover object-center' />
      </div>
      
    </div>
  )
}

export default BlogHeader