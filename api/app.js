const mongoose = require('mongoose');
require('dotenv').config()
const express = require('express')
const app = express()

app.use(
    express.urlencoded({
      extended: true,
    }),
  )

app.use(express.json())


//Routes import
const imagesRouter = require('./routes/imagesRouter.js')
const authRouter = require('./routes/auth.js')

app.use('/images', imagesRouter)
app.use('/auth', authRouter)


mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@cluster0.qlbxvma.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Conectou-se ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))