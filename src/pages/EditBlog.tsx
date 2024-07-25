import Editor from '@/components/Blogs/CreateBlog/Editor'
import Loader from '@/components/loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { upload } from '@/lib/utils'
import { getBlog } from '@/queryFns/getBlog'
import { updateBlog } from '@/queryFns/updateBlog'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Trash2 } from 'lucide-react'
import { ChangeEvent, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'


const EditBlog = () => {

    const { id } = useParams()
    const { data: blog, status } = useQuery({
        queryKey: ["blog", id],
        queryFn: () => getBlog(id)
    })

    const queryClient = useQueryClient()

    const [title, setTitle] = useState<string|undefined>(blog?.title)
    const [description, setDescription] = useState<string|undefined>(blog?.description)
    // const [content, setContent] = useState<string|undefined>(blog?.content)
    const [blogImage, setBlogImage] = useState<string | null>(null)
    const [image, setImage] = useState<File | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [loading, setLoading] = useState(false)


    const {mutateAsync} = useMutation({
        mutationKey: ['updateblog', id],
        mutationFn: ({title, description, content, image_id, id}:{title:string|undefined , description: string|undefined, content: string|undefined, image_id: number , id:string  })=>updateBlog(title, description, content, image_id, id),
        onSuccess: ()=>{
            toast.success("Post Updated")
            queryClient.invalidateQueries({queryKey:['blogs']})
            queryClient.invalidateQueries({queryKey:['blog', id]})
        }
    })

    const onImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files

        if (!files) {
            return
        }

        const image = Array.from(files)[0]
        console.log(image);

        setImage(image)
        const image_url = URL.createObjectURL(image)
        setBlogImage(image_url)

    }

    const update = async(content:string)=>{
        let imageId = undefined
        setLoading(true)
        try {
            if(image){
                imageId = await upload(image)
                
            }
            if((title || description || content || imageId ) && id){
               await mutateAsync({title, description, content, image_id:imageId, id})
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }


    if (status === "pending") {
        return <Loader />
    }

    if (status === "error") {
        return "Something went wrong"
    }


    return (

        <div className='flex flex-col gap-y-5 xl:max-w-[35%] md:max-w-[70%] max-w-[90%] mx-auto mt-10'>
            <Label htmlFor='title' className='space-y-2'>
                <p>Title</p>
                <Input id='title' className='' defaultValue={blog.title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
            </Label>
            <Label htmlFor='description' className='space-y-2'>
                <p>Description</p>
                <Textarea defaultValue={blog.description} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} id='description' />
            </Label>
            <Label htmlFor='thumbnail' className='space-y-2'>
                <p>Thumbnail</p>
                <div>
                    <Input ref={inputRef} content='123' onChange={onImageUpload} placeholder='Drag or choose image to upload' type='file' id='thumbnail' name='image' className='h-28 block border border-dashed' />
                </div>
            </Label>
            {blog.image.original && <div className='w-[100px] h-auto  flex items-center gap-x-3'>
                <img src={blogImage || blog.image.original} alt="blog image" className='object-cover border border-gray-500 object-center rounded-md' />
                {blogImage && <Button onClick={() => {
                    setBlogImage(null)
                    if(inputRef.current){
                        console.log('Clearing current val');
                        
                        inputRef.current.value = ""
                    }

                }} variant={"ghost"} size={"sm"}> <Trash2 strokeWidth={1} className='h-4 w-4' /></Button>}
            </div>}
            <Editor isPending={loading} content={blog?.content} handleContent={update}/>
        </div>

    )
}

export default EditBlog