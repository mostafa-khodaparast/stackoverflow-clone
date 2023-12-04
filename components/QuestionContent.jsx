/* eslint-disable no-trailing-spaces */
'use client'
import React, { useEffect } from 'react'

// to use prism two items are needed:
// 1. import needed languages as below
// 2. use prism.css for styling the code

import Prism from 'prismjs'
import parse from 'html-react-parser'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-aspnet'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-solidity'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-r'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-mongodb'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

function QuestionContent ({ content }) {
  useEffect(() => {
    Prism.highlightAll() // use prism to show codes properly
  }, [])
  
  return (
    <div>{parse(content)}</div> // use parse to omit html code from question content
  )
}

export default QuestionContent
