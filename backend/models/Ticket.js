const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
    component: {
        type: String,
        required: true,
    },
    systemType: {
        type: String
    },
    failureDescirption: {
        type: String

    },

    uploadedFile: {
        type: String
    },
    creatorID: {
        type: String,
    }

});

let Ticket = model('Ticket', ticketSchema)

module.exports = Ticket
