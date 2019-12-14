const { machineData } = require('./../data/machine-data')

module.exports = {
    getById: (req, res) => {
        const machineId = req.params.machineId;

        machineData.getById(machineId)
            .then(data => {
                res.success(
                    true,
                    data.msg,
                    data.machine,
                    200
                );
            }).catch(err => {
                res.success(
                    false,
                    err.message,
                    null,
                    404
                );
            });
    },

    edit: (req, res) => {
        const id = req.params.machineId;

        machineData.edit(id, req.body)
            .then(data => {
                res.success(
                    true,
                    data.msg,
                    null,
                    200
                );
            }).catch(err => {
                res.success(
                    false,
                    err.message,
                    null,
                    500
                );
            });
    },

    delete: (req, res) => {
        const id = req.params.machineId;

        machineData.delete(id)
            .then(msg => {
                res.success(
                    true,
                    msg,
                    null,
                    200
                );
            }).catch(err => {
                res.success(
                    false,
                    err.message,
                    null,
                    500
                );
            });
    }
}