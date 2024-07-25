import {  LogOut, Power, SquarePen, UserRoundPlus } from 'lucide-react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthProvider'
import AvatarPopover from './AvatarPopover'
import { useQueryClient } from '@tanstack/react-query'


const Navbar = () => {

    const { auth, loading, setAuth } = useAuth()
    // const {data:user, isLoading, error} = useGetIdendity()

    const queryClient = useQueryClient()



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
                        <p className='cursor-pointer' onClick={() => {
                                localStorage.removeItem("jwt")
                                if(auth.id){
                                    setAuth?.(null)
                                    // location.reload()
                                    queryClient.clear()
                                    // queryClient.cancelQueries({queryKey:["savelists"]})
                                }
                        }}>
                            <LogOut strokeWidth={1} className='w-5 h-5 mt-[-2px] text-gray-600' />
                        </p>
                        <AvatarPopover />
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