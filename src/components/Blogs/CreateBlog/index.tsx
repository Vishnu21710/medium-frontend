import { DeleteIcon, FileUp, Trash2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { ChangeEvent, useState } from 'react'
import Editor from './Editor'
import { Button } from '@/components/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createBlogs } from '@/queryFns/createBlog'
import axios from 'axios'
import { API_URL } from '@/constants/constants'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { upload } from '@/lib/utils'

type Props = {}

const Create = (props: Props) => {

    const [loading, setLoading] = useState(false)

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { status, data, mutate, error, isPending } = useMutation({
        mutationFn: ({ title, description, content, image_id }: { title: string, description: string, content: string, image_id: number }) => createBlogs(title, description, content, image_id),
        onSuccess:(data)=>{
            toast.success("Post Published")
            queryClient.invalidateQueries({queryKey: ["blogs"]})
            navigate('/')
        }   
    })

    console.log(data, "Blog data");
    console.log(error)



    const [title, setTitle] = useState("")

    const [blogImage, setBlogImage] = useState<string | null>(null)

    const [description, setDescription] = useState("")


    const [image, setImage] = useState<File | null>(null)


    const onImageUplod = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return

        const files = Array.from(e.target.files)

        const image = files[0]

        setImage(image)

        const imageUrl = URL.createObjectURL(image)

        setBlogImage(imageUrl)
    }

   

    const postBlog = async(content:string)=>{
        console.log("inside postblog");
        
        setLoading(true)
        try {
            const imageId = await upload(image)
            console.log(imageId, "POST BLOG");
            
            if(imageId){
                console.log('inside if');
                
                mutate({title, description, content, image_id:imageId})
            }
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false)
        }
    }

    


    return (
        <div className='flex flex-col gap-y-5 xl:max-w-[35%] md:max-w-[70%] max-w-[90%] mx-auto mt-10'>
            <Label htmlFor='title' className='space-y-2'>
                <p>Title</p>
                <Input id='title' className='' value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
            </Label>
            <Label htmlFor='description' className='space-y-2'>
                <p>Description</p>
                <Textarea value={description} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} id='description' />
            </Label>
            <Label htmlFor='thumbnail' className='space-y-2'>
                <p>Thumbnail</p>
                <div>
                    <Input content='123' onChange={onImageUplod} placeholder='Drag or choose image to upload' type='file' id='thumbnail' name='image' className='h-28 block border border-dashed' />
                </div>
            </Label>
            {blogImage && <div className='w-[100px] h-auto  flex items-center gap-x-3'>
                <img src={blogImage} alt="blog image" className='object-cover border border-gray-500 object-center rounded-md' />
                <Button onClick={() => setBlogImage(null)} variant={"ghost"} size={"sm"}><Trash2 strokeWidth={1} className='h-4 w-4' /></Button>
            </div>}
            <Editor handleContent={postBlog} isPending={loading}/>
        </div>
    )
}

export default Create