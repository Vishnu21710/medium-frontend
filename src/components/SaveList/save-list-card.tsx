import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Ellipsis, LoaderCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthProvider'

type Props = {
    title: string,
    name: string,
    totalPosts: number
    id: number
}

const SaveListCard = ({ title, name, totalPosts, id }: Props) => {

    const { auth, loading } = useAuth()

    if (loading) {
        return (
            <div className='w-full flex justify-center'>
                <LoaderCircle className='animate-spin w-6 h-6' />
            </div>
        )
    }

    return (
        <Link to={`/list/${id}`} className='w-full bg-[#f9f9f9]  flex items-center '>
            <div className='space-y-5 p-5 w-3/5'>
                <div className='flex items-center gap-x-3'>
                    <Avatar className='h-6 w-6'>
                        <AvatarImage src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' alt='user image' />
                    </Avatar>
                    <p className='text-xs'>{name}</p>
                </div>
                <h3 className='font-bold text-2xl'>{title}</h3>
                <div className='w-full flex justify-between'>
                    <p className='text-xs text-gray-600'>{totalPosts < 1 ? "No Stories" : totalPosts === 1 ? "1 story" : totalPosts + " stories"}</p>
                    <Ellipsis strokeWidth={1} className='h-5 w-5' />
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
        </Link>
    )
}

export default SaveListCard