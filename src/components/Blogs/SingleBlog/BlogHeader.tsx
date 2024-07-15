import BlogAuthor from './BlogAuthor'

type Props = {
    title: string
    author: string
    createdAt?: string
    time?:string
}

const BlogHeader = ({title, author, createdAt, time }: Props) => {
  return (
    <div className='flex flex-col gap-9 '>
        <h2 className='text-4xl font-bold text-slate-800 '>{title}</h2>
        <BlogAuthor author={author} createdAt={createdAt} time={time}/>
    </div>
  )
}

export default BlogHeader