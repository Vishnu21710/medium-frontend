import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

type Props = {}

const nav_links = [
    {
        title: "Your Lists",
        to: '/library'
    },
    {
        title: "Saved Lists",
        to: '/library/saved-lists'
    },
    {
        title: "Highlights",
        to: '/library/highlights'
    },
    {
        title: "Statisitcs",
        to: '/library/stats'
    }
]

const LibraryNavbar = (props: Props) => {


    const { pathname } = useLocation()




    return (
        <nav className='w-full flex justify-between border-b my-5'>
            {
                nav_links.map(link => (
                    <Link to={link.to} className={clsx('text-sm cursor-pointer text-gray-600 py-4 transition', pathname === link.to && "border-b border-black text-gray-800")} >
                        {link.title}
                    </Link>
                ))
            }
        </nav>
    )
}

export default LibraryNavbar