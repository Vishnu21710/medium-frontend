import React from 'react'
import Quote from '../components/Auth/Quote'
import AuthSinup from '../components/Auth/Auth'
import Auth from '../components/Auth/Auth'

type Props = {}

const Signup = (props: Props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <Auth type="signup"/>
        <Quote/>
    </div>
  )
}

export default Signup