import { useEffect, useState } from "react"

type Size = "sm" | "lg" | "md" | "xl" | "2xl"

export const useScreenSize = ():{size: Size}=>{
    const [size, setSize] = useState<Size>("sm")

    useEffect(()=>{
        const handleSize = ()=>{
            const width = window.innerWidth

            if(width < 640){
                setSize("sm")
            }else if(width < 768){
                setSize("md")
            }else if(width < 1024){
                setSize("lg")
            }else if(width < 1280){
                setSize("xl")
            }else {
                setSize("2xl")
            }
        }

        handleSize()

        window.addEventListener("resize", handleSize)

        return ()=>{
            window.removeEventListener("resize", handleSize)
        }
    }, [])

    return  {
        size
    }
}