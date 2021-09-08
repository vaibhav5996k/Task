const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        require: true
    },
}, {
    timestamps: true
});



const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;