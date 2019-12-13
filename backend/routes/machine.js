const express = require('express')
const Machine = require('../models/Machine')
const machineController = require('../controllers/machine-controller')

const router = new express.Router()

router.post("/create", (req, res) => {
  const machineObj = req.body;

  console.log(machineObj)


  const machineToSave = new Machine(machineObj);
  machineToSave.save()
    .then(() => res.json('Machine added!'))
    .catch(err => res.status(400).json('Error: ' + err))

})
router.post("/edit", (req, res) => {
  const machineObj = req.body;

  console.log("machineObj")
  console.log(machineObj)


  const machineToSave = new Machine(machineObj);
  machineToSave.findOneAndUpdate()
    .then(() => res.json('Machine updated!'))
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