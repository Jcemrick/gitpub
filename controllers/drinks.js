// ----------------------
// Dependencies 
// ----------------------
const express = require('express');
const drinks = require('../models/drinks');




// ----------------------
// Router
// ----------------------

const router = express.Router();


// ----------------------
// Routes
// ----------------------
router.get('/', (req, res) => {
  res.render('drinks_index.ejs', {
    drink: drinks.getAll()
  })
})

router.get('/drinks/:id', (req, res) => {
  res.send(`Drink info for ${req.params.id}`)
})


// ----------------------
// export
// ----------------------
module.exports = router