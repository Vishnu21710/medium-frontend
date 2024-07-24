import React from 'react'
import Editor from '../components/Blogs/CreateBlog/Editor'
import Create from '@/components/Blogs/CreateBlog'

type Props = {}

const CreateBlog = (props: Props) => {
  return (
    <div>
        {/* <Editor/> */}
        <Create/>
    </div>
  )
}

export default CreateBlog