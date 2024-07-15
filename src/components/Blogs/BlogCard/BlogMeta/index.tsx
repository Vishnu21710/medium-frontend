import clsx from 'clsx'
import { Bookmark, Ellipsis, ThumbsUp } from 'lucide-react'
import moment from 'moment'
import { useEffect, useState } from 'react'
import SaveButton from '../../../SaveList/save-button'

type Props = {
content: string
publishedAt?: string
}

const BlogMeta = ({content, publishedAt}: Props) => {

    // const [saved, setSaved] = useState(false)

    // useEffect(()=>{
    //     if(saved){
    //         console.log('Saved to database');
    //         return
    //     }
    //     console.log('Unsaved from database');
        
    // }, [saved])

    return (
        <div className='flex items-center sm:justify-start justify-between sm:gap-x-28 text-xs  text-gray-400 py-2'>
            <div className='flex items-center gap-x-3'>
                <div>{moment(publishedAt).format('ll').split(',')[0]}</div>
                <span className='inline-flex items-center gap-1'><ThumbsUp strokeWidth={1} className='h-4 w-4 mb-1 cursor-pointer text-gray-400'/> 24</span>
                <p className="">{`${Math.ceil(content.split(" ").length / 200)} min read`}</p>
            </div>
            <div className='flex items-center gap-x-5 '>
                <SaveButton/>
                <Ellipsis className='h-5 w-5 text-gray-400 cursor-pointer' strokeWidth={1}/>
            </div>
        </div>
    )
}

export default BlogMeta