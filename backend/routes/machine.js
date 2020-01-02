const express = require('express')
const Machine = require('../models/Machine')
const Ticket = require('../models/Ticket')
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


router.post("/add-ticket", (req, res) => {
  const ticketObj = req.body;

  console.log(ticketObj)


  const ticketToSave = new Ticket(ticketObj);
  ticketToSave.save()
    .then(() => res.json('Ticket added!'))
    .catch(err => res.status(400).json('Error: ' + err))

})


router.get('/', (req, res) => {
  Machine
    .find()
    .then(machines => {
      res.status(200).json(machines)
    })
})


router.put('/edit/:machineId', machineController.edit)
router.delete('/delete/:machineId', machineController.delete)

module.exports = router