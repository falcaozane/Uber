const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const cors = require('cors')
const connectToDb = require('./db/db')
const userRouter = require('./routes/user.routes')

connectToDb();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/users', userRouter)

module.exports = app