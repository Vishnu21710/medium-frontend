import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { getList } from '@/queryFns/getList'
import { useQuery } from '@tanstack/react-query'
import { Ellipsis, LoaderCircle, MessageCircle, ShareIcon } from 'lucide-react'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import BlogPosts from './components/blog-posts'
import { useState } from 'react'
import { Pagination } from '@/components/pagination'
import Loader from '@/components/loader'

type Props = {}

const List = (props: Props) => {
    const params = useParams()
    const [page, setPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(1)

    const onPageChange = (val:number)=>{
        console.log("inside onPage Change", val);
        
        setPage(val)
    }

    console.log(page , "Current Page");
    

    const id = Number(params.id)

    const { data: saveList, isLoading, error, status, isError, fetchStatus } = useQuery({
        queryKey: ["list", id, page, pageSize],
        queryFn: () => getList(id, page, pageSize),
        staleTime: 1000 * 60 * 5,
        

    })

    

    if (status === "pending" ) {
        return (
            <Loader/>
        )
    }

    if (status === "error" || isError) {
        return "Something went wrong"
    }

    let totalStories = ""

    saveList._count?.posts > 1 
    ? totalStories = `${saveList._count?.posts} stories` 
    : saveList._count?.posts === 1 
    ? totalStories = "1 Story" 
    : totalStories = "No Stories"


    return (
        <div className='xl:max-w-[35%] md:max-w-[70%] max-w-[90%] mx-auto mt-10'>
            <div className='flex gap-x-4'>
                <Avatar className='h-14 w-14'>
                    <AvatarImage src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' />
                </Avatar>
                <div className=' flex flex-col justify-between'>
                    <p className='text-sm '>{saveList.user.name}</p>
                    <p className='text-sm text-gray-500'>{moment(saveList.createdAt).format('ll')} · {totalStories}</p>
                </div>
            </div>

            <div className='my-7 space-y-7'>
                <h3 className='text-3xl font-extrabold text-gray-800'>{saveList.title}</h3>
                <div className='flex justify-between border-t border-b border-gray-200'>
                    <div>
                        <MessageCircle strokeWidth={1} className='w-5 h-5 text-gray-600 my-3'/>
                    </div>
                    <div className='flex gap-x-3 items-center'>
                        <ShareIcon className='w-5 h-5 text-gray-600 my-3' strokeWidth={1}/>
                        <Ellipsis className='w-5 h-5 text-gray-600 my-3' strokeWidth={1}/>
                    </div>
                </div>
            </div>

            <BlogPosts saveListId={saveList.id} posts={saveList.posts} fetchStatus={fetchStatus}/>
            <Pagination onPageChange={onPageChange} totalCount={saveList._count.posts} currentPage={page} pageSize={pageSize} siblingCount={1} />
        </div>
    )
}

export default List