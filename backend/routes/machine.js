const express = require('express')
const Machine = require('../models/Machine')
const Ticket = require('../models/Ticket')
const machineController = require('../controllers/machine-controller')
const multer = require('multer')
const authCheck = require("../config/auth-check");


const router = new express.Router()

router.post("/create", (req, res) => {
  const machineObj = req.body;

  console.log(machineObj)


  const machineToSave = new Machine(machineObj);
  machineToSave.save()
    .then(() => res.json('Machine added!'))
    .catch(err => res.status(400).json('Error: ' + err))

})

const DIR = 'public';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})
const upload = multer(
  console.log('Hello from Multer upload'),
  { storage: storage })




router.post("/add-ticket", upload.single('uploadedFile'), (req, res) => {


  const url = req.protocol + '://' + req.get('host')
  const ticketObj = req.body;

  console.log(ticketObj)

  const ticketToSave = new Ticket(
    {
      systemType: req.body.systemType,
      component: req.body.component,
      failureDescription: req.body.failureDescription,
      uploadedFile: url + '/public/' + req.body.fileName,
      creatorID: req.body.creatorID
    }
  );
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