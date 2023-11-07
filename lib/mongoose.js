import mongoose from 'mongoose'

export async function connectToDB () {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('------connection to mongoDB was successful------')
  } catch (error) {
    console.log('------connection to mongoDB failed------', error)
  }
}
