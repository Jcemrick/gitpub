//-------------------------------------
// Setup - Import dependencies and create app object
//-------------------------------------
require('dotenv').config();
const express = require('express');
const drinkRouter = require('./controllers/drinks')
const foodRouter = require('./controllers/foods')


const app = express();

const port = process.env.PORT;

//-------------------------------------
// Declare Middleware
//-------------------------------------

app.use('/drinks', drinkRouter)

app.use('drinks/:id', drinkRouter)

app.use('/foods', foodRouter)

app.use('foods/:id', foodRouter)

app.use('/styles', express.static('styles'))


//-------------------------------------
// Routes
//-------------------------------------
app.get('/', (req, res) => {
  res.render('home.ejs');
})



//-------------------------------------
// Server Listener
//-------------------------------------

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})