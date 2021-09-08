const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    category_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    product_details: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
}, {
    timestamps: true
});



const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;