import { useQuery } from '@tanstack/react-query'
import BlogCard from '../components/Blogs/BlogCard/BlogCard'
import BlogCardSkeleton from '../components/Blogs/BlogCard/BlogCardSkeleton'
import { getBlogs } from '../queryFns/getBlogs'


const Blogs = () => {

  // const { data: blogs, isLoading, error } = useGetBlogs()

  const { data: blogs, status } = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
  })

  console.log(blogs);





  // if (!isError ) {
  //   return <p>Error</p>
  // }



  if (status === "pending") {
    return <div className='xl:max-w-[35%] md:max-w-[70%] max-w-[85%] mx-auto mt-10'>
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
    </div>
  }

  if (status === "error") {
    return null
  }



  return (
    <div className='xl:max-w-[35%] md:max-w-[70%] max-w-[90%] mx-auto mt-10'>
      {
        blogs.length > 0 && blogs.map(blog => <BlogCard thumbnail={blog.image.thumbnail} description={blog.description || ""} key={blog.id} id={blog.id} author={blog.user?.name || "James"} content={blog.content} title={blog.title} publishedAt={blog.createdAt} saveLists={blog.save_lists} />)
      }
    </div>
  )
}

export default Blogs





{/* <BlogCard author='James' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, unde id aut sint omnis cumque minima, cum adipisci sed fugiat nam veniam eos illum nulla voluptate magni illo fugit? Illo iusto, ad quis aspernatur eaque adipisci, sequi minus odio id voluptates cum eos hic quia ipsam totam maiores vel at! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, unde id aut sint omnis cumque minima, cum adipisci sed fugiat nam veniam eos illum nulla voluptate magni illo fugit? Illo iusto, ad quis aspernatur eaque adipisci, sequi minus odio id voluptates cum eos hic quia ipsam totam maiores vel at!' title='How to create an AWS server ' publishedAt='06-01-2024'/>
      <BlogCard author='James' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, unde id aut sint omnis cumque minima, cum adipisci sed fugiat nam veniam eos illum nulla voluptate magni illo fugit? Illo iusto, ad quis aspernatur eaque adipisci, sequi minus odio id voluptates cum eos hic quia ipsam totam maiores vel at! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, unde id aut sint omnis cumque minima, cum adipisci sed fugiat nam veniam eos illum nulla voluptate magni illo fugit? Illo iusto, ad quis aspernatur eaque adipisci, sequi minus odio id voluptates cum eos hic quia ipsam totam maiores vel at!' title='How to create an AWS server ' publishedAt='06-01-2024'/>
      <BlogCard author='James' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, unde id aut sint omnis cumque minima, cum adipisci sed fugiat nam veniam eos illum nulla voluptate magni illo fugit? Illo iusto, ad quis aspernatur eaque adipisci, sequi minus odio id voluptates cum eos hic quia ipsam totam maiores vel at! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, unde id aut sint omnis cumque minima, cum adipisci sed fugiat nam veniam eos illum nulla voluptate magni illo fugit? Illo iusto, ad quis aspernatur eaque adipisci, sequi minus odio id voluptates cum eos hic quia ipsam totam maiores vel at!' title='How to create an AWS server ' publishedAt='06-01-2024'/> */}