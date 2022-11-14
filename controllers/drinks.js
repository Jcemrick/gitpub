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
router.get('/drinks', (req, res) => {
  res.render('drinks_index.ejs', {
    drinks: drinks,
  })
})

router.get('/', (req, res) => {
  res.send("Welcome to the Gitpub App!");
})

router.get('/:id', (req, res) => {
  res.render('drinks_show.ejs', {
    drinks: drinks,
  })
})

// ----------------------
// export
// ----------------------
module.exports = router