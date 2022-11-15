// ----------------------
// Dependencies 
// ----------------------
const express = require('express');
const food = require('../models/foods');



// ----------------------
// Router
// ----------------------


const foodRouter = express.Router();


// ----------------------
// Routes
// ----------------------

foodRouter.get('/', (req, res) => {
  res.render('foods_index.ejs', {
    foods: food
  })
})

foodRouter.get('/:id', (req, res) => {
  res.render('foods_show.ejs', {
    foods: food,
    id: req.params.id,
  })
})

// ----------------------
// export
// ----------------------
module.exports = foodRouter