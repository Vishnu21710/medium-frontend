import React, { ChangeEvent, FormEventHandler } from 'react'
import { Checkbox } from '../ui/checkbox'
import { SaveList } from '@/queryFns/getSaveLists'
import { CheckedState } from '@radix-ui/react-checkbox'

type Props = {
    saveList: SaveList,
    onChange?: (e: CheckedState) => void
    handleSelectedId: (id: number) => void
    checked: boolean
}

const SaveListCheckbox = ({ saveList, onChange, handleSelectedId, checked }: Props) => {
    return (
        <div className='flex items-center gap-x-3 '>
            <div className="flex items-center space-x-2 ">
                <Checkbox  defaultChecked={checked} onClick={() => handleSelectedId(saveList.id)} onCheckedChange={onChange} value={saveList.id} className='data-[state=checked]:bg-green-500 rounded-[3px] data-[state=checked]:border-green-400' id={saveList.id.toString()} name={`check-${saveList.id}`} />
                <label
                    htmlFor={saveList.id.toString()}
                    className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {saveList.title}
                </label>
            </div>

        </div>
    )
}

export default SaveListCheckbox