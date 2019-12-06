const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    productUrl: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: [
            'HW', 'Banking', 'HCI'
        ]
    },
});

module.exports = model('Product', productSchema);