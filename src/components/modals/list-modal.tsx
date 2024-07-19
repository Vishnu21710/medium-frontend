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
import { useListModal } from "@/hooks/useListModal"
import { createList } from "@/queryFns/createList"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LoaderCircle } from "lucide-react"
import { ChangeEvent, useEffect, useState } from "react"
import { toast } from "sonner"

export function ListModal() {

    const { isOpen, onClose } = useListModal()
    const [title, setTitle] = useState("")

    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: ({ title }: { title: string }) => {
            return createList(title)
        },
        onSettled: (data, error) => {
            if (error) {
                toast.error(error.message)
            } else if (data) {
                toast.success(`${data.title} List Created`)
                queryClient.invalidateQueries({ queryKey: ["savelists"] })
            }

            onClose()

        }
    })



    const handleCreate = () => {
        if (title) {
            mutate({ title })
        }
    }


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>

            <DialogContent className="md:max-w-[425px] max-w-sm">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            List Name
                        </Label>
                        <Input
                            name="title"
                            id="title"
                            defaultValue=""
                            className="col-span-3"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setTitle(e.target.value)
                            }}
                        />
                    </div>

                </div>
                <DialogFooter>
                    <Button onClick={onClose} variant={"outline"} >Cancel</Button>
                    <Button disabled={isPending} onClick={handleCreate} className="bg-green-600 text-white hover:bg-green-600/90">{isPending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Save"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
