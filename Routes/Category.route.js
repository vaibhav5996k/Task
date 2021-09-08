const express = require('express');
const router = express.Router();

const CategoryController = require('../Controller/Category.Controller');

//Get a list of all products
router.get('/', CategoryController.getAllCategory);

//Create a new product
router.post('/', CategoryController.createNewCategory);

//Get a product by id
router.get('/:id', CategoryController.findCategoryById);

//Update a product by id
router.patch('/product/:id', CategoryController.createNewProductThroughCategory)

// Update a product by id
router.patch('/:id', CategoryController.updateCategory);

// Delete a product by id
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;