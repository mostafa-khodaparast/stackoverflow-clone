'use server'
import { connectToDB } from '../mongoose'
import Question from '@database/question.model'
import Tag from '@database/tag.model'

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
  } catch (error) {
    console.log(error)
  }
}
