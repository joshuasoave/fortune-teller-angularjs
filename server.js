//~~~~~~~~Configuration~~~~~~~~~//

const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

//~~~~~~~~~Middleware~~~~~~~~~//

app.use(express.json())
app.use(express.static('public'))

//~~~~~~~~~Controllers~~~~~~~~~//

// const usersController = require('./controllers/users.js');
// app.use('/users', usersController);

//~~~~~~~~~Listener~~~~~~~~~//

app.listen(PORT, () => {
  console.log('listening...');
})