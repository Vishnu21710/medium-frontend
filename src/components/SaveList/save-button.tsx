import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getSaveLists } from '../../queryFns/getSaveLists'
import { Bookmark } from 'lucide-react'
import clsx from 'clsx'
import SaveOptions from './save-option'

type Props = {}

const SaveButton = (props: Props) => {

    const [openOptions, setOpenOptions] = useState(false)

    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['savelists'],
        queryFn: getSaveLists
    })

    console.log(data, 'save list data');
    

    const handeOpenOptions = () => {
        setOpenOptions((val) => !val)
    }

    const handleBlur = ()=>{
        console.log('Inside handle Blur');
        
        setOpenOptions(false)

    }

    if (!isSuccess) {
        return null
    }

    

    return (
        <div className='relative cursor-pointer' >
            <Bookmark  onClick={handeOpenOptions} className={clsx('h-5 w-5 text-gray-400 cursor-pointer')} strokeWidth={1} />

            <SaveOptions handleBlur={handleBlur} saveLists={data.save_lists} isLoading={isLoading} openOptions={openOptions} />
        </div>
    )
}

export default SaveButton