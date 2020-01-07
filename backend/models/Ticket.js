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
    creatorID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    machineID: {
        type: Schema.Types.ObjectId,
        ref: 'Machine'
    }


});


let Ticket = model('Ticket', ticketSchema)

module.exports = Ticket
module.exports.initialList = () => {
    Ticket.find({}).then(products => {
        if (products.length > 0) return

        Ticket.create(

            {
                repairDate: 'Jan 06 2020',
                component: 'SAS/SATA Disk',
                failureText: 'Failed HDD',
                fileLocation: 'http://localhost:9949/public/IMG_0278.JPG',
                creatorID: '5df2119b086e0c61e8989503'
            }            ,
        )
    })
}