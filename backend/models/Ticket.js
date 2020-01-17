const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
    repairDate: {
        type: Date
    },
    component: {
        type: String,
        required: true
    },
    failureText: {
        type: String
    },
    fileLocation: {
        type: String
    },
    ticketNumber: {
        type: String
    },
    creatorID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    machineID: {
        type: Schema.Types.ObjectId,
        ref: 'Machine'
    },
    ticketStatus: {
        type: Boolean,
        default: false
    }


});


let Ticket = model('Ticket', ticketSchema)

module.exports = Ticket
