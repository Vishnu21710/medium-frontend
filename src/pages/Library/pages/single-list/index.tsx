import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const SingleList = (props: Props) => {

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