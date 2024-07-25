import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'


const SingleList = () => {

    const params = useParams()

    console.log(params);
    

    const {} = useQuery({
        queryKey: ["list", ]
    })

    return (
        <div>
            SingleList
        </div>
    )
}

export default SingleList