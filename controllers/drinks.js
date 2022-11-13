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

// ----------------------
// export
// ----------------------
module.exports = router