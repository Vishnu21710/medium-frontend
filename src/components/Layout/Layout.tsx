import React from 'react'
import Navbar from '../AppBar/Navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default Layout