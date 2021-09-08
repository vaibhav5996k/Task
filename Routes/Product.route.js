const express = require('express');
const router = express.Router();

const ProductController = require('../Controller/Product.controller');


router.post('/', ProductController.createNewProduct);


module.exports = router;