const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    productUrl: {
        type: String 
    }
});

module.exports = model('Product', productSchema);