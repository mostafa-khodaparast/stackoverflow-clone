/* eslint-disable no-trailing-spaces */
'use client'
import { Editor } from '@tinymce/tinymce-react'
import React, { useRef } from 'react'

function AnswerForm () {
  const editorRef = useRef(null)
  
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='mt-5'>
            <h2 className='mt-4 pl-2 font-bold text-blue-950 dark:text-orange-500'>Write your answer here:</h2>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3' >
                <Editor
                    apiKey='be8uwtd8v6ask56npc0otvnued3k024fbqxazadbid88ukun'
                    // eslint-disable-next-line no-return-assign
                    onInit={(evt, editor) => editorRef.current = editor}
                    
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'codesample', 'fullscreen',
                        'insertdatetime', 'media', 'table'
                      ],
                      toolbar: 'undo redo | ' +
                            'codesample | bold italic forecolor | alignleft aligncenter | ' +
                            'alignright alignjustify | bullist numlist',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px; background-color:#dce3f1 }',
                      skin: 'oxide-dark'
                    }}
                />
                <button
                    disabled={false}
                    className='cursor-pointer self-end rounded bg-light-400 p-4 text-lg font-bold
                     text-dark-400 hover:bg-orange-500 hover:text-light-700 disabled:cursor-not-allowed
                     dark:bg-gray-700 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-slate-800'
                >
                    Submit Answer
                </button>
            </form>
        </div>
  )
}

export default AnswerForm
