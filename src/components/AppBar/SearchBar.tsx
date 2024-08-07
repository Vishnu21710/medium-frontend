import { SearchIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


const SearchBar = () => {
  return (
    <div className='flex gap-5 items-center '>
      <Link to={'/'}>
                <img src="https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png" className='w-7 h-7' alt="" />
      </Link>
                <div className='gap-3 rounded-full bg-gray-100/50 p-2 md:flex hidden'>
                    <SearchIcon className='text-gray-400' />
                    <input type="text" className='focus:border-0 focus:outline-none focus:ring-0 bg-gray-100/50' placeholder='search' />
                </div>
            </div>
  )
}

export default SearchBar