import { useListModal } from '@/hooks/useListModal'
import { Button } from '../ui/button'


type Props = {
    isLoading: boolean,
}

const SaveListOptions = ({ isLoading }: Props) => {

    const {onOpen} = useListModal()

    return (
        <div className='space-x-5'>
            <Button onClick={onOpen} disabled={isLoading} className='h-8' variant={"ghost"}>Create</Button>
        </div>
    )
}

export default SaveListOptions