import React from 'react'
import Navbar from '../AppBar/Navbar'
import { ListModalContextProvider } from '@/contexts/ListModalContext'
import { ListModal } from '../modals/list-modal'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {

  
  return (
    <>
      <Navbar />
      <ListModalContextProvider>
        <ListModal />
        {children}
      </ListModalContextProvider>
    </>
  )
}

export default Layout