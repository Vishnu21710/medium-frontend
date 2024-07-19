import { ListModalContext } from "@/contexts/ListModalContext"
import { useContext } from "react"

export const useListModal = () =>{
        const {isOpen, onClose, onOpen} = useContext(ListModalContext)

        return {
            isOpen,
            onClose,
            onOpen
        }

}