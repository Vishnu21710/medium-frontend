import { createContext, useState } from "react";

type ListModalContextType = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}


export const ListModalContext = createContext<ListModalContextType>({
    isOpen: false,
    onOpen: ()=>{},
    onClose() {
        
    },
})


export const ListModalContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    const values = {
        isOpen,
        onOpen,
        onClose
    }

    return <ListModalContext.Provider value={values}>{children}</ListModalContext.Provider>
}