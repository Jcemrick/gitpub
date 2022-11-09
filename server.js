//-------------------------------------
// Setup - Import dependencies and create app object
//-------------------------------------
require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT

//-------------------------------------
// Declare Middleware
//-------------------------------------






//-------------------------------------
// Declare Routes and Routers
//-------------------------------------
app.get('/', (req, res) => {
  res.send("Welcome to the Gitpub App!")
})





//-------------------------------------
// Server Listener
//-------------------------------------

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})