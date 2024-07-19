import clsx from 'clsx'
import { LoaderCircle } from 'lucide-react'
import React from 'react'

type Props = {
    className?:string
}

const Loader = ({className}: Props) => {
  return (
    <div className={clsx('w-full flex items-center justify-center', className)}>
    <LoaderCircle className='animate-spin h-7 w-7' />
</div>
  )
}

export default Loader