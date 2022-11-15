// ----------------------
// Dependencies 
// ----------------------
const express = require('express');
const foods = require('../models/foods');


// ----------------------
// Router
// ----------------------


const router = express.Router();


// ----------------------
// Routes
// ----------------------

router.get('/foods', (req, res) => {
  res.render('foods_index.ejs', {
    foods: foods,
  })
})

router.get('/foods/:id', (req, res) => {
  res.render('foods_show.ejs', {
    foods: foods,
    id: req.params.id,
  })
})

// ----------------------
// export
// ----------------------
module.exports = router