const { Schema, model } = require('mongoose');


const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'
const machineSchema = new Schema({
    machineName: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE,
        unique: true,
    },
    manufacturer: {
        type: String,
        required: REQUIRED_VALIDATION_MESSAGE,
        enum:
            ['Lenovo', 'HPE', 'Cisco', 'Dell', 'Other']
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
        enum:
            ['Server', 'Storage', 'Switch']
    },
    startDate: {
        type: Schema.Types.Date,
        required: REQUIRED_VALIDATION_MESSAGE
    },
    endDate: {
        type: Schema.Types.Date,
        required: REQUIRED_VALIDATION_MESSAGE
    },

    agree: {
        type: Schema.Types.Boolean
    },


});


module.exports = model('Machine', machineSchema);


