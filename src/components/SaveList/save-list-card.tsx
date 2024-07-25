import { ElementRef, KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import {  LoaderCircle } from 'lucide-react'
import {  useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthProvider'
import SaveListActions from './save-list-actions'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateList } from '@/queryFns/updateList'

type Props = {
    title: string,
    name: string,
    totalPosts: number
    id: number
}

const SaveListCard = ({ title, name, totalPosts, id }: Props) => {

    const queryClient = useQueryClient()

    //auth hook
    const { loading } = useAuth()
    //states
    const [saveListTitle, setSaveListTitle] = useState(title)
    const [edit, setEdit] = useState(false)
    //refs
    const inputRef = useRef<ElementRef<"input">>(null)


    //effects
    useEffect(() => {
        if (edit && inputRef.current) {
            inputRef.current.focus()
        }
    }, [edit])

    //navigation hook
    const navigate = useNavigate()

    //mutation Hook

    const { mutate, isPending } = useMutation({
        mutationKey: ["updateList", id],
        mutationFn: () => updateList(id, saveListTitle),
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["savelists"] })
        }
    })

    if (loading) {
        return (
            <div className='w-full flex justify-center'>
                <LoaderCircle className='animate-spin w-6 h-6' />
            </div>
        )
    }

    const onBlur = () => {
        if (saveListTitle !== title) {
            mutate()
            
        }
        setEdit(false)
    }


    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Escape") {
            setEdit(false)
        }

        if (e.key === "Enter" && edit && saveListTitle !== title) {
            console.log("ENTER");
            setEdit(false)
            mutate()
        }
    }

    return (
        <div onClick={() => navigate(`/list/${id}`)} className='w-full cursor-pointer bg-[#f9f9f9]  flex items-center '>
            <div className='space-y-5 p-5 w-3/5'>
                <div className='flex items-center gap-x-3'>
                    <Avatar className='h-6 w-6'>
                        <AvatarImage src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' alt='user image' />
                    </Avatar>
                    <p className='text-xs'>{name}</p>
                </div>
                <div onClick={(e) => e.stopPropagation()} className='inline-block'>
                    {!edit ? <Button disabled={isPending} variant={"ghost"} onClick={() => {
                        setEdit(true)

                    }} className='font-bold text-2xl p-0'>{saveListTitle}</Button> : <Input  onKeyDown={onKeyDown} ref={inputRef} onChange={e => setSaveListTitle(e.target.value)} defaultValue={saveListTitle} onBlur={onBlur} />}
                </div>
                <div className='w-full flex justify-between'>
                    <p className='text-xs text-gray-600'>{totalPosts < 1 ? "No Stories" : totalPosts === 1 ? "1 story" : totalPosts + " stories"}</p>
                    <div onClick={(e) => e.stopPropagation()}>
                        <SaveListActions saveListId={id} />
                    </div>
                </div>
            </div>
            <div className='w-2/5 h-[150px] border  flex gap-1 overflow-hidden'>
                {

                }
                <div className=' w-3/6 h-full border'>
                    <img src="https://images.pexels.com/photos/26840789/pexels-photo-26840789/free-photo-of-old-riga.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='object-cover h-full w-full' />
                </div>
                <div className=' w-2/6 h-full border'>
                    <img className='object-cover h-full w-full' src="https://images.pexels.com/photos/23325663/pexels-photo-23325663/free-photo-of-woman-photographing-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className=' w-1/6 h-full border'>
                    <img className='object-cover h-full w-full' src="https://images.pexels.com/photos/16094516/pexels-photo-16094516/free-photo-of-silhouettes-of-rock-formations-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SaveListCard