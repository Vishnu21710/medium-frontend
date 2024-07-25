import { BlockTypeSelect, BoldItalicUnderlineToggles, ChangeCodeMirrorLanguage, codeBlockPlugin, codeMirrorPlugin, CodeToggle, ConditionalContents, imagePlugin, InsertAdmonition, InsertCodeBlock, InsertImage, listsPlugin, MDXEditor, MDXEditorMethods, quotePlugin, thematicBreakPlugin, toolbarPlugin, UndoRedo } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { headingsPlugin } from '@mdxeditor/editor'
import axios from 'axios'
import {  useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import Loader from '@/components/loader'

type Props = {
    handleContent?: (content:string)=>void
    isPending?: boolean
    title?:string,
    description?:string,
    content?:string  
}


const Editor = ({handleContent, isPending, content}: Props) => {
    const markdown = content || ""

    const [mdxData] = useState()
    const ref = useRef<MDXEditorMethods>(null)

    console.log(status, 'Create Status');
    

//     const defaultSnippetContent = `
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
// `.trim()

    // const simpleSandpackConfig: SandpackConfig = {
    //     defaultPreset: 'react',
    //     presets: [
    //         {
    //             label: 'React',
    //             name: 'react',
    //             meta: 'live react',
    //             sandpackTemplate: 'react',
    //             sandpackTheme: 'light',
    //             snippetFileName: '/App.js',
    //             snippetLanguage: 'jsx',
    //             initialSnippetContent: defaultSnippetContent
    //         },
    //     ]
    // }


    async function imageUploadHandler(image: File) {
        const formData = new FormData()
        formData.append('file', image)
        console.log(formData.get("image"));

        try {
            const data = await axios.post('http://localhost:8787/api/v1/uploads', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            console.log(data.data.image);

            return data.data.image
        } catch (error) {
            return "something went wrong"
        }
        // send the file to your server and return
        // the URL of the uploaded image in the response

    }

    console.log(mdxData);

    return (
        <div className=' prose min-w-full' >
            <p>Editor</p>
            <MDXEditor ref={ref} plugins={[headingsPlugin(), thematicBreakPlugin(), listsPlugin(), quotePlugin(), toolbarPlugin({
                toolbarContents: () => (
                    <>
                        {' '}
                        <UndoRedo />
                        <BoldItalicUnderlineToggles />
                        <BlockTypeSelect />
                        <CodeToggle />
                        <InsertAdmonition />
                        <InsertCodeBlock />
                        <InsertImage />
                        <ConditionalContents
                            options={[
                                { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },

                            ]}
                        />
                    </>
                )
            }), codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
            codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS' } }),
            imagePlugin({
                imageUploadHandler: imageUploadHandler
            })
            ]} markdown={markdown} />
            <Button variant={"secondary"} onClick={() => {
                const markdown = ref.current?.getMarkdown()
                console.log(markdown);
                if(markdown){
                    handleContent?.(markdown)
                }

            }}>{isPending ? <Loader/> : "Save"}</Button>
        </div >
    )
}

export default Editor