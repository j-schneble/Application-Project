require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const noteRouter = require('./routes/noteRouter')
const path = require('path')


const app = express()
app.use(cors())
app.use(express.json())



// Routes
app.use('/users', userRouter)
app.use('/api/notes', noteRouter)



// Listen Server
const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})

// Connect to MongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
  
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})
