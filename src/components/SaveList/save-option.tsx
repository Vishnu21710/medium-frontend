import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { SaveList } from '../../queryFns/getSaveLists'

type Props = {
    saveLists: SaveList[],
    isLoading: boolean,
    openOptions: boolean,
    handleBlur: () => void
}

const SaveOptions = ({ saveLists, isLoading, openOptions, handleBlur }: Props) => {

    const divref = useRef<HTMLDivElement>(null)

    const [selectedIds, setSelectedIds] = useState<number[]>([])

    console.log(selectedIds);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        if (e.target.checked) {
            console.log('Item selected');
            setSelectedIds((pre) => [...pre, Number(e.target.value)])

        } else {
            console.log('Items not selected');
            setSelectedIds((pre) => pre.filter(id => id !== Number(e.target.value)))

        }

    }


    return (
        <>
            {
                openOptions &&
                <div ref={divref} tabIndex={0} className='h-[150px] cursor-default p-3 focus:ring-0 focus:outline-0  bg-white w-[300px] border rounded-md shadow-md  top-5 absolute'>
                    {
                        saveLists.map(saveList => (
                            <div key={saveList.id} className='flex items-center text-[15px] gap-x-3 py-2 font-light text-gray-900'>
                                <input type="checkbox" onChange={onChange} name={saveList.title} value={saveList.id} />
                                <p>{saveList.title}</p>
                            </div>
                        ))
                    }
                    <hr className='w-full  h-0  border-green-500/90 mt-5' />
                    <div>
                        <button className='py-2 px-4 text-sx rounded-md bg-black hover:bg-black/80 transition text-white my-3'>Create List</button>
                        <button>Save</button>
                    </div>
                </div>
            }
        </>

    )
}

export default SaveOptions