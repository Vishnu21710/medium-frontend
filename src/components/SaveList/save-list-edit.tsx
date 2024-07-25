import { Edit } from 'lucide-react'

type Props = {
    saveListId:number
}


const SaveListEdit = ({saveListId}: Props) => {
    console.log(saveListId);
    
    return (
        <div className='flex items-center gap-x-3 cursor-pointer'>
            <Edit strokeWidth={1} className='w-5 h-5 mt-[-2px] text-gray-600' />
            <p className='font-light'>Edit</p>
        </div>
    )
}

export default SaveListEdit