import {Ellipsis, ThumbsUp } from 'lucide-react'
import moment from 'moment'
import SavePopover from '@/components/SaveList/save-popover'
import { SaveList } from '@/queryFns/getSaveLists'

type Props = {
    content: string
    publishedAt?: string
    id: string
    saveLists?: SaveList[]
}

const BlogMeta = ({ content, publishedAt, id, saveLists }: Props) => {

    

    return (
        <div className='flex items-center sm:justify-start justify-between sm:gap-x-28 text-xs  text-gray-400 py-2'>
            <div className='flex items-center gap-x-3'>
                <div>{moment(publishedAt).format('ll').split(',')[0]}</div>
                <span className='inline-flex items-center gap-1'><ThumbsUp strokeWidth={1} className='h-4 w-4 mb-1 cursor-pointer text-gray-400' /> 24</span>
                <p className="">{`${Math.ceil(content.split(" ").length / 200)} min read`}</p>
            </div>
            <div className='flex items-center gap-x-5 '>
                {/* <SaveButton id={id}/> */}
                <SavePopover post_id={id} saveLists={saveLists} />
                
                        <Ellipsis className='h-5 w-5 text-gray-400 cursor-pointer' strokeWidth={1} />
            </div>
        </div>
    )
}

export default BlogMeta