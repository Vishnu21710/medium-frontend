import { Button } from '@/components/ui/button'
import { BookmarkPlus } from 'lucide-react'

type Props = {
    onOpen: ()=>void
}

const LibraryAdd = ({onOpen}: Props) => {
  return (
    <div className='bg-green-600  w-full overflow-hidden rounded-md  my-10 flex items-center justify-between p-5'>
                <div className='space-y-5  md:w-1/2'>
                <p className='text-white  text-2xl font-bold '>
                    Create a list to easily
                    <br />
                    organize and share stories
                </p>
                <Button onClick={onOpen} className='rounded-full'>Start List</Button>
                </div>
                <div className='md:w-1/2 flex justify-center relative '>
                    <div className='absolute md:w-[300px] md:h-[300px]  bg-green-300/80 rounded-full -top-[120px]'>

                    </div>
                    <div className='relative'>
                        <div className='p-3 bg-white rounded-full '>
                            <BookmarkPlus className='h-7 w-7 relative text-green-600' strokeWidth={1} />
                        </div>

                    </div>

                </div>
            </div>
  )
}

export default LibraryAdd