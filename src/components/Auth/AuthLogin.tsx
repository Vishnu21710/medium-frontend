import { ChangeEvent, useState } from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'
import {  SignupInput } from '@oblivion_2171/medium-common'


const AuthLogin = () => {

  const [signinInputs , setSigninInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name:""
  })

  const onChange = ((e: ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target

    setSigninInputs(preVal=> ({...preVal, [name]: value}))

  })

  

  return (
    <div className='h-screen flex  items-center justify-center '>
            <div className='flex flex-col w-full gap-7 max-w-sm'>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-4xl font-bold'>Login in to Medium</p>
                    <p className='text-gray-400'>Don't have an account? <Link to={'/signup'} className='underline cursor-pointer'>Signup?</Link></p>
                </div>
                <div className='flex flex-col gap-5 '>
                        <Input onChange={onChange} value={signinInputs.email} name='email' title='Email' type='email' placeholder='Enter your email'/>
                        <Input onChange={onChange} value={signinInputs.password} name='password' title='Password' type='password' placeholder='Enter your Password'/>
                        <button className='bg-gray-900 text-white text-sm font-semibold p-2 rounded-lg'>Sign Up</button>
                </div>
            </div>
        </div>
  )
}

export default AuthLogin