import React from 'react'
import EditButton from './edit-button'
import DeleteButton from './delete-button'
import { useAuth } from '@/contexts/AuthProvider'
import { useDeleteModal } from '@/hooks/useDeleteModal'
import { useParams } from 'react-router-dom'

type Props = {
    user_id: string | undefined
}

const FloatingButton = ({ user_id }: Props) => {

    const { auth } = useAuth()

    const {id} = useParams()

    const {onOpen} = useDeleteModal()

    if(auth?.id !== user_id){
        return
    }

    return (
        <div className='flex flex-col gap-y-4 px-3 sticky top-16 right-0 items-end'>
            <EditButton blogId={id}/>
            <DeleteButton onClick={onOpen}/> 
        </div>
    )
}

export default FloatingButton