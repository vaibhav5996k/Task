const createError = require('http-errors');
const mongoose = require('mongoose');

const Product = require('../Model/Product.model')



module.exports = {
    createNewProduct: async (req, res, next) => {
        try {
            const product = new Product(req.body);
            const result = await product.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error.name === 'ValidationError') {
                next(createError(422, error.message));
                return;
            }
            next(error);
        }
    },
}