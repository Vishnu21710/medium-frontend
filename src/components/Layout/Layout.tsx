import React from 'react'
import Navbar from '../AppBar/Navbar'
import { ListModalContextProvider } from '@/contexts/ListModalContext'
import { ListModal } from '../modals/list-modal'
import { DeleteModal } from '../modals/delete-modal'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {

  
  return (
    <>
      <Navbar />
      <DeleteModal/>
      <ListModalContextProvider>
        <ListModal />
        {children}
      </ListModalContextProvider>
    </>
  )
}

export default Layout