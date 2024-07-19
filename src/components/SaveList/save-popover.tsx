import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Bookmark, LoaderCircle } from 'lucide-react'
import clsx from 'clsx'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getSaveLists, SaveList } from '@/queryFns/getSaveLists'
import { Separator } from '../ui/separator'
import SaveListCheckbox from './save-list-checkbox'
import SaveListOptions from './save-list-options'
import { CheckedState } from '@radix-ui/react-checkbox'
import { savePost } from '@/queryFns/savePost'
import { toast } from 'sonner'
import { unsavePost } from '@/queryFns/unsavePost'

type Props = {
    post_id: string,
    saveLists?: SaveList[]
}

const SavePopover = ({ post_id }: Props) => {

    const queryClient = useQueryClient()

    const [selectedId, setSelectedId] = useState<number | null>(null)
    const [selectedIds, setSelectedIds] = useState<number[]>([])



    const { data, isSuccess: isPostSavedOnDatabase, error, isPending, mutate, variables } = useMutation({
        mutationKey: ["connectPost"],
        mutationFn: (data: { post_id: string, save_list_ids: number[] }) => {
            return savePost(data.post_id, data.save_list_ids)
        },
       
        onSuccess: (data) => {
            console.log('Save data', data);
            toast.success("Post saved")

            queryClient.invalidateQueries({ queryKey: ["savelists"] })
            queryClient.invalidateQueries({ queryKey: ["list"] })
        }
    })





    const { mutate: unsaveMutate } = useMutation({
        mutationKey: ["disconnectPost"],
        mutationFn: (data: { post_id: string, save_list_ids: number[] }) => {
            return unsavePost(data.post_id, data.save_list_ids)
        },
        
        onSuccess: (data) => {
            console.log('Save data', data);
            toast.success("Post unsaved")

            queryClient.invalidateQueries({ queryKey: ["savelists"] })
            queryClient.invalidateQueries({ queryKey: ["list"] })

        }
    })

    // Get all the savelist for logged in user
    const { data: saveLists, isSuccess, isLoading } = useQuery({
        queryKey: ['savelists'],
        queryFn: getSaveLists,
        staleTime: 5000 

    })

    // Save and Unsave post when user checks or unchecks the checkbox
    const onChange = ((checked: CheckedState) => {
        if (checked) {
            if (selectedId) {
                const newSelectedIds = [...selectedIds, selectedId]
                console.log(newSelectedIds, saveLists);
                mutate({ post_id, save_list_ids: newSelectedIds })
                setSelectedIds(newSelectedIds)
            }
        } else {
            if (selectedId) {
                const newSelectedIds = selectedIds.filter(id => id !== selectedId)
                console.log(newSelectedIds);
                unsaveMutate({ post_id, save_list_ids: [selectedId] })
                setSelectedIds(pre => pre.filter(id => id !== selectedId))
            }
        }
    })

    const handleSelectedId = (id: number) => {
        setSelectedId(id)
    }
    //One way to check if post is present in any one of the user's savelist
    // const post_ids_in_savelists = new Set((saveLists?.map(sl => sl.posts.map(p => p.id)))?.flat())

    const isPostSaved = saveLists?.some(sl => sl.posts.some(p => p.id === post_id))


    return (
        <Popover>
            <PopoverTrigger>
                <Bookmark className={clsx('h-5 w-5 text-gray-400 cursor-pointer', isPostSaved  ? "fill-black" : "fill-white")} strokeWidth={1} />
            </PopoverTrigger>
            <PopoverContent className='space-y-4'>
                {
                    isLoading && <LoaderCircle className='animate-spin h-6 w-6 mx-auto my-7' />
                }
                {
                    isSuccess && saveLists.map(sl => (
                        <SaveListCheckbox checked={!!sl.posts.find(p => p.id === post_id)} key={sl.id} saveList={sl} onChange={onChange} handleSelectedId={handleSelectedId} />
                    ))
                }

                <Separator />
                <SaveListOptions isLoading={isLoading} />
            </PopoverContent>
        </Popover>
    )
}

export default SavePopover


