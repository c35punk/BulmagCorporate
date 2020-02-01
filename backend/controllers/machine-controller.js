const { machineData } = require('./../data/')

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

        console.log("req.body")
        console.log(req.body)
        console.log("id")
        console.log(id)

        machineData.edit(id, req.body)
            .then(data => {
                console.log("data");
                console.log(data);
            }).catch(err => {
                console.log(err)
            });
    },
    editConfirmedByAdmin: (req, res) => {
        const id = req.params.machineId;

        console.log("req.body")
        console.log(req.body)
        console.log("id")
        console.log(id)

        machineData.editConfirmedByAdmin(id, req.body)
            .then(data => {
                console.log("data");
                console.log(data);
            }).catch(err => {
                console.log(err)
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