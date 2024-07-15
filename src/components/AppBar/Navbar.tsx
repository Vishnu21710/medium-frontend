import { BookOpen, LogOut, Power, SearchIcon, SquarePen, UserRoundPlus } from 'lucide-react'
import React from 'react'
import { Avatar } from '../Blogs/BlogCard/BlogCard'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useGetIdendity } from '../../hooks'
import { useAuth } from '../../contexts/AuthProvider'

type Props = {}

const Navbar = (props: Props) => {

    const { auth, loading } = useAuth()
    // const {data:user, isLoading, error} = useGetIdendity()





    return (
        <div className='flex justify-between px-14 py-2 border-[1px] border-slate-100'>
            <SearchBar />
            {!loading && <div className='flex gap-7 items-center'>
                <Link className='text-sm text-gray-600 flex items-center gap-2' to={'/'}><BookOpen className='w-3 mt-[-2px] text-black' />Blogs</Link>
                {auth ?
                    <>
                        <Link to={"/create"} className='flex gap-2 items-center'>
                            <SquarePen className='w-3 mt-[-2px]' size={25} />
                            <p className='text-gray-600 text-sm '>Write</p>
                        </Link>
                        <p className='cursor-pointer' onClick={() => localStorage.removeItem("jwt") > location.reload()}>
                            <LogOut className='w-3 mt-[-2px]' />
                        </p>
                        <Avatar className='cursor-pointer' size='medium' name={auth?.id || "N"} />
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