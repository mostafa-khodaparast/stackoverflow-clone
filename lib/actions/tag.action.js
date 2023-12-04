/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
'use server'
import Tag from '@database/tag.model'
import { connectToDB } from '../mongoose'
import User from '@database/user.model'

export async function getTopInteractedTags (params) {
  try {
    await connectToDB()
    const { userId } = params
    const user = await User.findById(userId)
    if (!user) throw new Error('User not found')
    
    return [
      { id: '1', name: 'tag1' },
      { id: '2', name: 'tag2' },
      { id: '3', name: 'tag3' }
    ]

  } catch (error) {
    console.log(error)
  }
}

export async function getAllTags () {
  try {
    await connectToDB()
    const tags = await Tag.find({})
    return tags

  } catch (error) {
    console.log(error)
  }
}
