import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {
    onOpen: ()=>void
}

const LibraryHeader = ({onOpen}: Props) => {
  return (
    <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-[40px]'>Your library</h1>
                <Button onClick={onOpen} className='bg-green-600 text-white rounded-full hover:bg-green-600/90'>New List</Button>
            </div>
  )
}

export default LibraryHeader