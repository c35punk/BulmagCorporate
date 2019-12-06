const { Schema, model } = require('mongoose');

const machineSchema = new Schema({
    machineName: {
        type: String,
        required: true,
        unique: true,
    },
    manufacturer: {
        type: String,
        required: true,
        enum:
            ['Lenovo', 'HPE', 'Cisco', 'Dell', 'Other']
    },
    productNumber: {
        type: String,
        required: true,
        maxlength: [50, 'Description should be less than 50 symbols']
    },
    serialNumber: {
        type: String,
        required: true,
        maxlength: [50, 'Description should be less than 50 symbols']
    },
    type: {
        type: String,
        required: true,
        enum:
            ['Server', 'Storage', 'Switch']
    },
    startDate: {
        type: Schema.Types.Date,
        required: true
    },
    endDate: {
        type: Schema.Types.Date,
        required: true
    },

    agree: {
        type: Schema.Types.Boolean
    },

    
});

module.exports = model('Machine', machineSchema);


