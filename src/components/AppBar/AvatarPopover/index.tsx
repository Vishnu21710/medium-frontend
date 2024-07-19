import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger, PopoverClose } from '@/components/ui/popover'
import { BookCopy, CircleUser, SquarePen } from 'lucide-react'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const profile_items: {
    icon: ReactElement,
    title: string,
    to: string
}[] = [
        {
            icon: <CircleUser className='h-5 w-5 text-gray-700 group-hover:text-black' strokeWidth={1} />,
            title: "Profile",
            to: "/me"
        },
        {
            icon: <BookCopy className='h-5 w-5 text-gray-700 group-hover:text-black' strokeWidth={1} />,
            title: "Library",
            to: "/library"
        }
    ]

const AvatarPopover = () => {
    return (
        <Popover >
            <PopoverTrigger>
                <Avatar className='w-6 h-6'>
                    <AvatarImage src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' alt='profile image' />
                    <AvatarFallback>{"PF"}</AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className='mx-4 w-48'>
                
                <ul className='flex flex-col gap-y-5'>
                <PopoverClose className='sm:hidden block' key={"write"}>
                    <Link to={"/create"} className='flex gap-x-4 items-center'>
                        <SquarePen strokeWidth={1} className='w-5 h-5 mt-[-2px] text-gray-600' size={25} />
                        <p className='text-gray-600 text-sm '>Write</p>
                    </Link>
                </PopoverClose>
                    {
                        profile_items.map((item) => (
                            <PopoverClose key={item.title} asChild>
                                <Link to={item.to}  className='flex items-center gap-x-4 cursor-pointer group'>
                                    {item.icon}
                                    <p className='text-sm text-gray-800 group-hover:text-black transition'>{item.title}</p>
                                </Link>
                            </PopoverClose>
                        ))
                    }
                </ul>
            </PopoverContent>
        </Popover>
    )
}

export default AvatarPopover