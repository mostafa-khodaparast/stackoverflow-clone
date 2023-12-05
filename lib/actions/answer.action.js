/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
'use server'
import Question from '@database/question.model'
import Answer from '@database/answer.model'
import { connectToDB } from '../mongoose'
import { revalidatePath } from 'next/cache'

export async function createAnswer (params) {
  try {
    await connectToDB()
    const { content, author, question, path } = params

    const newAnswer = new Answer({ content, author, question })

    // Add answer to question's answers array
    await Question.findByIdAndUpdate(question, {
      $push: { naswers: newAnswer._id }
    })

    revalidatePath(path)
    
  } catch (error) {
    console.log(error)
  }
}
