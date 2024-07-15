import React, { HTMLInputTypeAttribute } from 'react'

type Props = {
    placeholder?: string,
    title: string
    type?: HTMLInputTypeAttribute
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    name?: string
    value?:string
}

const Input = ({placeholder, title, type="text", onChange, name, value}: Props) => {
    return (
        <label className=' flex flex-col gap-2'>
            <p className='font-semibold text-lg text-gray-800 '>{title}</p>
            <input value={value} name={name} type={type} onChange={onChange} className=' border-[1px] border-gray-300 p-2 w-full rounded-lg font-semibold text-gray-800' placeholder={placeholder}  />
        </label>
    )
}

export default Input