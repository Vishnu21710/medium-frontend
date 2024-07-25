import { Edit2Icon } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = {
  blogId:string | undefined
}

const EditButton = ({blogId}: Props) => {
  return (
    <Link to={`/edit/${blogId}`} className='rounded-full cursor-pointer hover:scale-110 transition-transform h-9 w-9 flex items-center justify-center bg-white border p-2'>
        <Edit2Icon strokeWidth={1}/>
    </Link>
  )
}

export default EditButton