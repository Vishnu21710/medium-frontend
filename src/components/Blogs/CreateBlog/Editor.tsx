import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

type Props = {}

const Editor = (props: Props) => {



    return (
        <div className='w-[50%] mx-auto'>
            <p className='text-4xl font-bold my-10'>Blog Editor</p>
            <CKEditor
                editor={ClassicEditor}
                
                config={{
                    plugins: [SimpleUploadAdapter],
                    simpleUpload:{
                        uploadUrl: "http://localhost:8787/api/v1/uploads"
                    }
                     
                }}
                data={"Hello From Medium Blog"}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event) => {
                    console.log(event);
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            >

            </CKEditor>
        </div>
    )
}

export default Editor