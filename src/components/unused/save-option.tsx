import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { SaveList } from '../../queryFns/getSaveLists'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { useMutation } from '@tanstack/react-query'
import { savePost } from '@/queryFns/savePost'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
    saveLists: SaveList[],
    isLoading: boolean,
    openOptions: boolean,
    handleOpenOptions: () => void
    id?:string
}

const SaveOptions = ({ saveLists, isLoading, openOptions, handleOpenOptions, id }: Props) => {
    console.log(isLoading);
    

    const { isPending, mutate} = useMutation({
        mutationKey: ["connectPost"],
        mutationFn: (data:{post_id:string, save_list_ids: number[]})=>{
            return savePost(data.post_id, data.save_list_ids)
        },
        onSuccess: ()=>{
            toast.success("Saved To List")
        }
    })

    const divRef = useRef<HTMLDivElement>(null)

    const [selectedIds, setSelectedIds] = useState<number[]>([])

    console.log(id, 'POST ID', selectedIds, 'save list ids');
    

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                handleOpenOptions();
            }
        }

        if (openOptions) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openOptions, handleOpenOptions]);

    

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        if (e.target.checked) {
            console.log('Item selected');
            setSelectedIds((pre) => [...pre, Number(e.target.value)])

        } else {
            console.log('Items not selected');
            setSelectedIds((pre) => pre.filter(id => id !== Number(e.target.value)))

        }

    }


    return (
        <>
            {
                openOptions &&
                <div ref={divRef} tabIndex={0} className='h-[150px] cursor-default p-3 focus:ring-0 focus:outline-0  bg-white w-[300px] border rounded-md shadow-md  top-5 absolute'>
                    {
                        saveLists.map(saveList => (
                            <div key={saveList.id} className='flex items-center text-[15px] gap-x-3 py-2 font-light text-gray-900'>
                                <input type="checkbox" onChange={onChange} name={saveList.title} value={saveList.id} />
                                <p>{saveList.title}</p>
                            </div>
                        ))
                    }
                    <Separator className='my-3 '/>
                    <div className='flex items-center gap-x-4 '>
                        <Button className='h-8 text-black font-light hover:bg-green-100/80 hover:text-black' variant={"ghost"}>Create List</Button>
                        <Button onClick={()=>mutate({post_id: id!, save_list_ids: selectedIds})}  variant={'default'} className='text-xs h-8 flex justify-center items-center' size={'sm'}>{isPending ? <LoaderCircle className='animate-spin transition h-6 w-6'/> : "Save"}</Button>
                    </div>
                </div>
            }
        </>

    )
}

export default SaveOptions