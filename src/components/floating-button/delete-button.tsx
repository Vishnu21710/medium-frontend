import { Trash2Icon } from 'lucide-react'

type Props = {
    onClick: () => void
}

const DeleteButton = ({ onClick }: Props) => {

    


    return (
        <div onClick={onClick}  className='rounded-full cursor-pointer hover:scale-110 transition-transform h-9 w-9 flex items-center justify-center bg-white border p-2'>
              <Trash2Icon strokeWidth={1} />
        </div>
    )
}

export default DeleteButton