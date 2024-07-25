import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDeleteModal } from "@/hooks/useDeleteModal"
import { deleteBlog } from "@/queryFns/deleteBlog"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../loader"
import { useState } from "react"
import { toast } from "sonner"

export function DeleteModal() {

    const queryClient = useQueryClient()

    const [confirmInput, setConfirmInput] = useState<string>()
    const [error, setError] = useState<string | undefined>()

    const navigate = useNavigate()

    const {isOpen, onClose} = useDeleteModal()

    const {id} = useParams()

    const { isPending, mutate} = useMutation({
        mutationKey: ["deleteBlog", ],
        mutationFn: ()=>deleteBlog(id),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:["blogs"]})
            toast.success(`${data.title} post deleted`)
            onClose()
            navigate('/')
        }
    })

    console.log(isOpen);

    const handleDelete = ()=>{
        if(confirmInput === "yes"){
            mutate()
        }else{
            setError("Input Mis match")
        }
    }
    

    return (
        <Dialog open={isOpen} onOpenChange={()=>onClose(()=>setError(undefined))}>
            <DialogContent className="sm:max-w-[425px] max-w-[350px] rounded-sm">
                <DialogHeader>
                    <DialogTitle className="text-red-600">Delete Post</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this post
                    </DialogDescription>
                </DialogHeader>
                <Label>
                    <Input onChange={(e)=>setConfirmInput(e.target.value)>setError(undefined)} placeholder="type 'yes' to confirm" />
                    {error && <p className="text-xs my-2 text-red-400 mx-3">{error}</p>}
                </Label>
                <DialogFooter>
                    <Button onClick={handleDelete} disabled={isPending} type="submit" variant={"destructive"}>{isPending ? <Loader/> : "Save changes"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
