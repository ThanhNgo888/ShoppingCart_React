//import express
const express = require('express');
const router = express.Router();

//import the function
const { getProducts } = require('../controllers/productController');

router.route('/products').get(getProducts);

module.exports = router;