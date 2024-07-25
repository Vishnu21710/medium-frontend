import { useListModal } from '@/hooks/useListModal'
import LibraryAdd from '@/pages/Library/components/library-add'
import LibraryHeader from '@/pages/Library/components/library-header'
import LibraryNavbar from '@/pages/Library/components/library-navigation'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const LibraryLayout = ({ children }: Props) => {

    const { onOpen } = useListModal()
    return (
        <div className='xl:max-w-[35%] md:max-w-[70%] max-w-[90%] mx-auto mt-10'>
            <LibraryHeader onOpen={onOpen} />
            <LibraryAdd onOpen={onOpen} />
            <LibraryNavbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default LibraryLayout