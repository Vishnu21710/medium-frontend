import SaveListCard from '@/components/SaveList/save-list-card'
import { getSaveLists } from '@/queryFns/getSaveLists'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { LoaderCircle } from 'lucide-react'
import React from 'react'

type Props = {}

const UserLists = (props: Props) => {

  const { data: saveLists, isSuccess, isLoading } = useQuery({
    queryKey: ['savelists'],
    queryFn: getSaveLists,
    staleTime: 5000
  })

  console.log(saveLists);

  if (isLoading) {
    return (
      <div className='w-full flex justify-center'>
        <LoaderCircle className='animate-spin w-7 h-7' />
      </div>
    )
  }

  return (
    <div className='space-y-7'>
      {
        isSuccess && saveLists.map((sl)=><SaveListCard title={sl.title} id={sl.id} totalPosts={sl.posts.length} name={sl.user.name} key={sl.id}/>)
      }
    </div>
  )
}

export default UserLists