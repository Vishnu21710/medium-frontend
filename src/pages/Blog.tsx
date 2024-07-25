import { useParams } from 'react-router-dom'
import SingleBlog from '../components/Blogs/SingleBlog/SingleBlog'
import { useQuery } from '@tanstack/react-query'
import { getBlog } from '@/queryFns/getBlog'
import FloatingButton from '@/components/floating-button'

const Blog = () => {
  const {id} = useParams()
 const {data:blog, status} = useQuery({
  queryKey: ["blog", id],
  queryFn: ()=>getBlog(id)
 })


  if(status === "pending"){
    return <p>...Loading</p>
  }

  if(status === "error"){
    return "Something went wrong"
  }


  console.log(blog, 'blog');
  

  return (
    <div className='max-w-3xl mx-auto mt-10 relative '>
        <FloatingButton user_id={blog.user?.id}/>
        <SingleBlog content={blog.content } description={blog.description} title={blog.title} author={blog?.user?.name!} publishedAt='06-02-2024' time={`${Math.ceil(blog.content.split(" ").length / 200)} min read`} image={blog.image.original}/>
    </div>
  )
}

export default Blog