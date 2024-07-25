import { EventHandler, useEffect } from "react"


export const useEventListener = <K extends keyof WindowEventMap>(eventName:K, handler:(e:WindowEventMap[K])=>void )=>{
    useEffect(()=>{
        window.addEventListener(eventName, handler)

        return ()=>{
            window.removeEventListener(eventName, handler)
        }
    }, [eventName, handler])
}