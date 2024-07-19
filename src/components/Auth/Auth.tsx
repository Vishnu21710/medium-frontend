import React, { ChangeEvent, useContext, useState } from 'react'
import Input from './Input'
import { Link, useLocation } from 'react-router-dom'
import { SignupInput } from '@oblivion_2171/medium-common'
import axios from 'axios'
import { API_URL } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'
import Spin from '../unused/spin/Spin'
import { useAuth } from '../../contexts/AuthProvider'

type Props = {
    type: "signin" | "signup"
}

interface AuthReturnType {
    id: string,
    email: string,
    jwt_token: string
}

const Auth = ({ type }: Props) => {
    const [signinInputs, setSigninInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })

    const { auth,setAuth} = useAuth()

    const location = useLocation()
    const from = location.state?.from?.pathname || "/"


    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const onChange = ((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setSigninInputs(preVal => ({ ...preVal, [name]: value }))

    })

    console.log(signinInputs);

    const authRequest = async () => {
        setLoading(true)

        try {
            const response = await axios.post<AuthReturnType>(`${API_URL}/user/${type === "signin" ? "signin" : "signup"}`, signinInputs)
            const data = response.data

            localStorage.setItem("jwt", data.jwt_token)
            setAuth && setAuth({
                id: data.id,
                token: data.jwt_token
            })
            navigate(from, {replace: true})
        } catch (error) {
            alert(error)
        }

        setLoading(false)



    }



    let path = type === "signin" ? "/signup" : "/signin"
    let desc = type === "signin" ? "Don't have an account ? " : "Already have an account?"
    let button_text = type === 'signin' ? "Login" : "Sign up"
    let auth_title = type === "signin" ? "Log in it Medium" : "Create an Account"
    let link_text = type === "signin" ? "Sign Up" : "Login"

    return (
        <div className='h-screen flex  items-center justify-center '>
            <div className='flex flex-col w-full gap-7 max-w-sm'>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-4xl font-bold'>{auth_title}</p>
                    <p className='text-gray-400'>{desc} <Link to={path} className='underline cursor-pointer'>{link_text}</Link></p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <Input onChange={onChange} value={signinInputs.email} title='Email' name='email' type='text' placeholder='Enter your email' />
                    <Input onChange={onChange} value={signinInputs.password} title='Password' name='password' type='password' placeholder='Enter your Password' />
                    {type === 'signup' && <Input onChange={onChange} value={signinInputs.name} title='Name' name='name' type='text' placeholder='Enter your Name' />}
                    <button onClick={() => {
                        console.log('Before async');
                        authRequest()
                        console.log('After async');


                    }} className='mt-8 bg-gray-900 text-white text-sm font-semibold p-2 rounded-lg'>{loading ? <Spin /> : button_text}</button>
                </div>
            </div>
        </div>
    )
}

export default Auth