import { useListModal } from '@/hooks/useListModal'
import { Button } from '../ui/button'
import { useAuth } from '@/contexts/AuthProvider'
import clsx from 'clsx'


type Props = {
    isLoading: boolean,
}

const SaveListOptions = ({ isLoading }: Props) => {

    const {onOpen} = useListModal()
    const auth = useAuth()

    console.log(auth);
    

    return (
        <div className='space-x-5'>
            <Button onClick={onOpen} disabled={isLoading || !auth.auth} className={clsx('h-8', isLoading || !auth.auth ? "cursor-wait" : "cursor-pointer")} variant={"ghost"}>Create</Button>
        </div>
    )
}

export default SaveListOptions