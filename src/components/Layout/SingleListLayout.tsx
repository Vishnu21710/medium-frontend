import { ReactNode } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

type Props = {
    children: ReactNode
}

const SingleListLayout = ({ children }: Props) => {
    const params = useParams()

    const { } = useQuery({
        queryKey: ["list", params.id],
        queryFn: ()=>{}
    })

    return (
        <div className='xl:max-w-[35%] md:max-w-[70%] max-w-[90%] mx-auto mt-10'>
            <div className='flex '>
                <Avatar>
                    <AvatarImage src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' />
                </Avatar>
            </div>
            <div className=' flex flex-col justify-between'>
            </div>
        </div>
    )
}

export default SingleListLayout