import React from 'react'
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom'
import SingleBlog from '../components/Blogs/SingleBlog/SingleBlog'

type Props = {}

const Blog = (props: Props) => {
  const {id} = useParams()
  const {data:blog, error, isLoading} = useBlog(id)


  if(isLoading){
    return <p>...Loading</p>
  }

  return (
    <div className='max-w-3xl mx-auto mt-10 '>
        {blog && <SingleBlog content={blog?.content } title={blog?.title} author={blog.user?.name || "James "} createdAt='06-02-2024' time={`${Math.ceil(blog.content.split(" ").length / 200)} min read`} />}
    </div>
  )
}

export default Blog