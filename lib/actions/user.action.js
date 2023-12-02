/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
'use server'
import Question from '@database/question.model'
import { connectToDB } from '../mongoose'
import User from '@database/user.model'
import { revalidatePath } from 'next/cache'

export async function getUserById (params) {
  try {
    await connectToDB()
    const user = await User.findOne({ clerkId: params })
    return user
  } catch (error) {
    console.log(error)
  }
}

export async function createUser (params) {
  try {
    await connectToDB()
    const newUser = await User.create(params)
    return newUser
  } catch (error) {
    console.log(error)
  }
}

export async function updateUser (params) {
  try {
    await connectToDB()
    const { clerkId, updateData, path } = params
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true })
    revalidatePath(path)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteUser (params) {
  try {
    await connectToDB()
    const { clerkId } = params
    const user = await User.findOneAndDelete({ clerkId })
    if (!user) {
      throw new Error('user not found')
    }

    // get user question ids
    // const userQuestionIds = await Question.find({ author: user._id }).distinct('_id')

    // delete user questions
    await Question.deleteMany({ author: user._id })

    // TODO: delete user answers, comments, etc

    const deletedUser = await User.findByIdAndDelete(user._id)

    return deletedUser
    
  } catch (error) {
    console.log(error)
  }
}
