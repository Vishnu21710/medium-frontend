import BlogCard from '@/components/Blogs/BlogCard/BlogCard'
import { SaveList } from '@/queryFns/getSaveLists'
import { Image } from '@/types'
import { FetchStatus } from '@tanstack/react-query'
import { LoaderCircle } from 'lucide-react'
import React from 'react'

type Post = {
    id: string,
    title: string,
    publishedAt: string,
    content: string,
    description: string
    user: {
        name: string
    }
    image:Image
}

type Props = {
    saveListId: number,
    posts: Post[],
    fetchStatus: FetchStatus
}

const BlogPosts = ({ saveListId, posts, fetchStatus }: Props) => {

    if(fetchStatus === "fetching"){
        return (
            <div className='w-full flex items-center justify-center'>
                <LoaderCircle className='animate-spin h-7 w-7' />
            </div>
        )
    }


    return (
        <div className='space-y-5'>
            {
                posts.map((p) => (
                    <BlogCard description={p.description} thumbnail={p.image.thumbnail} author={p.user.name} title={p.title} id={p.id} key={p.id} publishedAt={p.publishedAt} content={p.content} />
                ))
            }
        </div>
    )
}

export default BlogPosts