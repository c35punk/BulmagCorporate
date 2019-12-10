const express = require('express')
const authCheck = require('../config/auth-check')
const Machine = require('../models/Machine')
const machineController = require('../controllers/machine-controller')

const router = new express.Router()

router.post("/create", (req, res) => {
  const machineObj = req.body;


  const machineToSave = new Machine(machineObj);
  machineToSave.save()
    .then(() => res.json('Machine added!'))
    .catch(err => res.status(400).json('Error: ' + err))

})

router.get('/', (req, res) => {
  Machine
    .find()
    .then(machines => {
      res.status(200).json(machines)
    })
})

router.delete('/delete/:machineId', machineController.delete)

router.get('/details/:machineId', machineController.getById)

router.put('/edit/:machineId', machineController.edit)

module.exports = router