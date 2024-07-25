import BlogHeader from './BlogHeader'
import Markdown from 'react-markdown'

type Props = {
    title: string,
    publishedAt?:string,
    time?: string,
    content: string,
    author : string,
    description?: string,
    image_id?:number,
    image: string
}

const SingleBlog = ({author, title, content, publishedAt, time, description, image}: Props) => {
  return (
    <div className='w-full sm:px-5 px-3'>
        <BlogHeader author={author} content={content} image={image} description={description} title={title} createdAt={publishedAt} time={time}/>
        <div className='py-7  w-full '>
        <Markdown className={"sm:prose prose-sm min-w-full"}
        >
          {content}
        </Markdown>
      </div>
    </div>
  )
}

export default SingleBlog