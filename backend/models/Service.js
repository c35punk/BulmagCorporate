const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
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

module.exports = model('Service', serviceSchema);