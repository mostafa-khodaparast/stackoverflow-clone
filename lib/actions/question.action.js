'use server'
import { connectToDB } from '../mongoose'
import Question from '@database/question.model'
import Tag from '@database/tag.model'
import User from '@database/user.model'
import { revalidatePath } from 'next/cache'

export async function createQuestion (params) {
  try {
    await connectToDB()
    const { title, content, tags, author, path } = params
    // create the question in mongo
    const question = await Question.create({
      title,
      content,
      author
    })
    // create the tags or get them if they already exists
    const tagDocuments = []
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      )
      tagDocuments.push(existingTag._id)
    }
    // update question by adding tags to it
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } }
    })
    revalidatePath(path) // refresh the page of the URL
  } catch (error) {
    console.log(error)
  }
}

export async function getQuestions () {
  try {
    await connectToDB()
    const questions = await Question.find({})
      .populate({ path: 'tags', model: Tag }) // populate is used to get related data from needed documents
      .populate({ path: 'author', model: User })
      .sort({ createdAt: -1 }) // sort the questions. latest questions are shown on top
    return questions
  } catch (error) {
    console.log(error)
  }
}
