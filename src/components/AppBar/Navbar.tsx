import { BookOpen, LogOut, Power, SearchIcon, SquarePen, UserRoundPlus } from 'lucide-react'
import React from 'react'
import { Avatar } from '../Blogs/BlogCard/BlogCard'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useGetIdendity } from '../../hooks'
import { useAuth } from '../../contexts/AuthProvider'
import AvatarPopover from './AvatarPopover'

type Props = {}

const Navbar = (props: Props) => {

    const { auth, loading } = useAuth()
    // const {data:user, isLoading, error} = useGetIdendity()





    return (
        <div className='flex justify-between px-14 py-2 border-[1px] border-slate-100'>
            <SearchBar />
            {!loading && <div className='flex gap-7 items-center'>
                
                {auth ?
                    <>
                        <Link to={"/create"} className='sm:flex gap-2 items-center hidden '>
                            <SquarePen strokeWidth={1} className='w-5 h-5 mt-[-2px] text-gray-600' size={25} />
                            <p className='text-gray-600 text-sm '>Write</p>
                        </Link>
                        <p className='cursor-pointer' onClick={() => localStorage.removeItem("jwt") > location.reload()}>
                            <LogOut strokeWidth={1} className='w-5 h-5 mt-[-2px] text-gray-600' />
                        </p>
                        <AvatarPopover/>
                    </>
                    :
                    <>
                        <Link className='text-sm text-gray-600 flex items-center gap-2' to={'/signin'}><Power className='w-3 mt-[-2px] text-black' /> Signin</Link>
                        <Link className='text-sm text-gray-600 flex items-center gap-2' to={'/signup'}> <UserRoundPlus className='w-3 mt-[-2px] text-black' />Signup</Link>
                    </>
                }
            </div>}
        </div>
    )
}

export default Navbar