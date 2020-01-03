const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
    systemType: {
        type: String
    },
    component: {
        type: String,
        required: true,
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
module.exports.initialList = () => {
    Ticket.find({}).then(tickets => {
        if (tickets.length > 0) return

        Ticket.create(
            {
                systemType: 'Server',
                component: 'SAS/SATA Disk',
                failureDescription: 'TEST',
                uploadedFile: 'test/location',
                fileName: 'TEST.JPG',
                creatorID: 'TEST'
            })
    })
}
