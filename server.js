//-------------------------------------
// Setup - Import dependencies and create app object
//-------------------------------------
require('dotenv').config();
const express = require('express');
const drinks = require('./models/drinks');
const drinkRouter = require('./controllers/drinks')


const app = express();

const port = process.env.PORT;

//-------------------------------------
// Declare Middleware
//-------------------------------------

app.use('/', drinkRouter)

app.use('/drinks', drinkRouter)

app.use('/drinks/:id', drinkRouter)




//-------------------------------------
// Server Listener
//-------------------------------------

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})