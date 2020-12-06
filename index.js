const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:0000@youtubeclone.69vhv.mongodb.net/Youtubeclone?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!ㄱㄱㄱㄱ'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))