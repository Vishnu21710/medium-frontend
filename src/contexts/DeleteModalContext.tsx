import { createContext, useState } from "react";

type DeleteModalContextType = {
    isOpen: boolean,
    onOpen: () => void,
    onClose: (callback?:()=>void) => void
}


export const DeleteModalContext = createContext<DeleteModalContextType>({
    isOpen: false,
    onOpen: ()=>{},
    onClose() {
        
    },
})


export const DeleteModalContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = (callback?:()=>void) => {
        setIsOpen(false)
        if(callback){
            callback()
        }
    }

    const values = {
        isOpen,
        onOpen,
        onClose
    }

    return <DeleteModalContext.Provider value={values}>{children}</DeleteModalContext.Provider>
}