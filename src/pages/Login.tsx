import React from 'react'
import AuthLogin from '../components/Auth/AuthLogin'
import Quote from '../components/Auth/Quote'
import Auth from '../components/Auth/Auth'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <Auth type='signin'/>
        <Quote/>
    </div>
  )
}

export default Login