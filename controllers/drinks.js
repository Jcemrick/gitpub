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
    drinks: drinks,
  })
})

router.get('/:id', (req, res) => {
  res.render('drinks_show.ejs', {
    drinks: drinks,
    id: req.params.id,
  })
})


// ----------------------
// export
// ----------------------
module.exports = router