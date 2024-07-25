import { useListModal } from '@/hooks/useListModal'
import LibraryHeader from './components/library-header'
import LibraryAdd from './components/library-add'


const Library = () => {

    const { onOpen } = useListModal()


    return (
        <div className='xl:max-w-[35%] md:max-w-[70%] max-w-[90%] mx-auto mt-10'>

            <LibraryHeader onOpen={onOpen} />
            <LibraryAdd onOpen={onOpen} />
            
        </div>
    )
}

export default Library