const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
    component: {
        type: String,
        required: true,
    },
    failureDescirption: {
        type: String,
        required: true,
    },
    creatorID: {
        type: String,
    }

});

let Ticket = model('Ticket', ticketSchema)

module.exports = Ticket
