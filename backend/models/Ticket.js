const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
    systemType: {
        type: String
    },
    component: {
        type: String,
        required: true,
    },
    failureText: {
        type: String
    },
    fileLocation: {
        type: String
    },
    creatorID: {
        type: String,
    }

});

let Ticket = model('Ticket', ticketSchema)

module.exports = Ticket
module.exports.initialList = () => {
    Ticket.find({}).then(tickets => {
        if (tickets.length > 0) return

        Ticket.create(
            {
                systemType: 'Server',
                component: 'SAS/SATA Disk',
                failureText: 'TEST',
                fileLocation: 'test/location',
                fileName: 'TEST.JPG',
                creatorID: 'TEST'
            })
    })
}
