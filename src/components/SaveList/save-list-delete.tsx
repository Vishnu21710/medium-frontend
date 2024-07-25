import { deleteSaveList } from '@/queryFns/deleteSaveList'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Trash } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
    saveListId:number
}

const SaveListDelete = ({saveListId}: Props) => {

    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey: ["delete-savelist", saveListId],
        mutationFn: ()=>deleteSaveList(saveListId),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:["savelists"]})
            toast.success(`${data.title} Deleted`)
        },
        onError: (error)=>{
            toast.error(String(error))
            
        },
        
    })

    return (
        <div onClick={()=>mutate()} className='flex items-center gap-x-3 text-red-600 cursor-pointer'>
            <Trash strokeWidth={1} className='w-5 h-5 mt-[-2px] ' />
            <p className='font-light'>Delete</p>
        </div>
    )
}

export default SaveListDelete