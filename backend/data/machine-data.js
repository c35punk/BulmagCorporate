const Machine = require('../models/Machine');

module.exports = {
    getById: async (machineId) => {
        try {
            const machine = await Machine.findById(machineId);
            return { machine, message: "Found!" };
        } catch (err) {
            console.log(err);
            throw new Error("Machine does not exists!");
        }
    },


    edit: async (id, newMachineInput) => {
        try {
            const machine = await Machine.findById(id);

            console.log("newMachineInput")
            console.log(newMachineInput)

            machine['proposedDate'] = newMachineInput.endDate

            await machine.save();
            return { msg: 'Edited successfully' };
        } catch (err) {
            console.log(err);
            throw new Error('Failed to edit machine');
        }
    },
    editByAdmin: async (id, newMachineInput) => {


        try {
            const machine = await Machine.findById(id)

            machine["endDate"] = newMachineInput.newEndDate

            console.log(machine)
            await machine.save();
            return { msg: 'Edited successfully by admin' };
        } catch (err) {
            console.log(err);
            throw new Error('Failed to edit machine');
        }
    }
}