'use server'
import { connectToDB } from '../mongoose'
import User from '@database/user.model'

export async function getUserById (params) {
  try {
    await connectToDB()
    const { userId } = params
    const user = await User.findOne({ clerkId: userId })
    return user
  } catch (error) {
    console.log(error)
  }
}
