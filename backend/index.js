//cors does not allow to access data from one port to another port so,
import cors from 'cors';
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookroute from './routes/books.route.js'
import userroute from './routes/user.route.js'

const app = express()
dotenv.config()
const port = process.env.PORT ||4005
const URI=process.env.MongoDbURI
//connect to db

try {
mongoose.connect(URI)
    console.log('connected to db');
} catch (error) {
    console.log(error)
}
app.use(cors())
app.use(express.json())
//defining routes

app.use('/book',bookroute)
app.use('/user',userroute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})