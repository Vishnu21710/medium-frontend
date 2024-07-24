import { DeleteModalContext } from "@/contexts/DeleteModalContext"
import { useContext } from "react"

export const useDeleteModal = () =>{
        const {isOpen, onClose, onOpen} = useContext(DeleteModalContext)

        return {
            isOpen,
            onClose,
            onOpen
        }

}