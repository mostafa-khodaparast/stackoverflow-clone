'use client'
import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Image from 'next/image'

function QuestionForm () {
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionTags, setQuestionTags] = useState([])
  const editorRef = useRef(null) // this is for questionBody

  const handleTagInput = (e, value) => {
    if (e.key === 'Enter') {
      setQuestionTags([...questionTags, value])
      e.target.value = ''
    }
  }

  const deleteTag = (tag) => {
    setQuestionTags(questionTags => questionTags.filter(val => val !== tag))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      questionTitle,
      questionBody: editorRef.current.getContent(),
      questionTags
    }
    console.log(formData)
  }

  return (
        <div className='mt-5'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3' >
                {/* question title */}
                <input
                    type="text"
                    className='w-full rounded-lg bg-light-700 p-3 font-semibold text-orange-500 focus:outline-none dark:bg-slate-700 dark:text-orange-500'
                    placeholder='title'
                    value={questionTitle}
                    onChange={e => setQuestionTitle(e.target.value)}
                />
                {/* tiny editor for question body */}
                <Editor
                    apiKey='be8uwtd8v6ask56npc0otvnued3k024fbqxazadbid88ukun'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue=''
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
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px; background-color:#dce3f1 }'
                    }}
                />
                {/* question tags */}
                <span className='pt-4 text-sm font-bold text-dark-100 dark:text-light-900'>Choose three tags for your question </span>
                <input
                    type="text"
                    className='w-full rounded-lg bg-light-700 p-3 font-semibold text-orange-500 focus:outline-none disabled:cursor-not-allowed dark:bg-slate-700 dark:text-orange-500'
                    placeholder='Tags'
                    onKeyDown={e => handleTagInput(e, e.target.value)}
                    disabled={questionTags.length >= 3}
                />
                <div className='flex gap-2 font-semibold'>
                    {questionTags.map((tag, index) => {
                      return (
                            <div key={index} className='mr-1 flex items-center gap-2 rounded-md bg-stone-300 px-3 py-2 text-xs text-stone-500 dark:bg-gray-700 dark:text-orange-400'>
                                <span>{tag}</span>
                                <span
                                    className='cursor-pointer object-contain pl-3 text-lg invert-0 hover:text-stone-900 hover:dark:text-orange-700'
                                    onClick={() => deleteTag(tag)}
                                >x</span>
                            </div>
                      )
                    })}
                </div>
                {/* submit button */}
                <button
                    disabled={questionTitle === '' || editorRef.current.getContent() === '' || questionTags.length < 3}
                    className='cursor-pointer self-end rounded bg-light-400 p-4 text-lg font-bold
                     text-dark-400 hover:bg-orange-500 hover:text-light-700 disabled:cursor-not-allowed
                     dark:bg-gray-700 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-slate-800'
                >
                    Submit
                </button>
            </form>
        </div>
  )
}

export default QuestionForm
