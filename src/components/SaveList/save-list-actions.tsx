import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '../ui/popover'
import { Ellipsis } from 'lucide-react'
import { Button } from '../ui/button'
import SaveListEdit from './save-list-edit'
import SaveListDelete from './save-list-delete'

type Props = {
  saveListId: number
}

const SaveListActions = ({ saveListId }: Props) => {



  return (

    <Popover >
      <PopoverTrigger>
        <Button variant={"ghost"}>
          <Ellipsis strokeWidth={1} className='h-5 w-5' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-40 text-sm space-y-5'>
        <PopoverClose>
          <SaveListEdit saveListId={saveListId} />
        </PopoverClose>
        <PopoverClose>
          <SaveListDelete saveListId={saveListId} />
        </PopoverClose>
      </PopoverContent>
    </Popover>

  )
}

export default SaveListActions