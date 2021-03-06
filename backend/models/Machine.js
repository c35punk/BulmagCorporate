const { Schema, model } = require('mongoose');


const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'
const machineSchema = new Schema({
    machineName: {
        type: String,
    },
    manufacturer: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE,
        enum:
            ['Lenovo', 'HPE', 'CISCO', 'Dell', 'INFINIDAT', 'Other']
    },
    productNumber: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE,
        maxlength: [50, 'Description should be less than 50 symbols']
    },
    serialNumber: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE,
        maxlength: [50, 'Description should be less than 50 symbols']
    },
    type: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE,
        values: [
            'Server', 'Storage', 'Switch'
        ],
        message: 'Status is invalid, valid values include [Server, Storage, Switch].'
    },

    tickets: [{}],

    startDate: {
        type: Schema.Types.Date,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    endDate: {
        type: Schema.Types.Date,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    proposedDate: {
        type: Schema.Types.Date,
    },

    agree: {
        type: Schema.Types.Boolean
    },

    creatorID: {
        type: String
    }

});


module.exports = model('Machine', machineSchema);


