import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema.Types

// Example Schema

const exampleUserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  }
})

const ExampleUser = mongoose.model('ExampleUser', exampleUserSchema)

export default ExampleUser
