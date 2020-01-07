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
const DIR = '../public';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png"
      || file.mimetype == "text/txt"
      || file.mimetype == "text/log"
      || file.mimetype == "image/jpg"
      || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg, .jpeg, .txt, and .log format allowed!'));
    }
  }
});

router.post("/add-ticket", upload.single('uploadedFile'), (req, res) => {

  const url = req.protocol + '://' + req.get('host')
  const ticketObj = req.body;




  const ticketToSave = new Ticket(
    {
      repairDate: req.body.repairDate,
      component: req.body.component,
      failureText: ticketObj.failureText,
      fileLocation: url + '/public/' + req.body.fileName,
      creatorID: req.body.creatorID,
      machineID: req.body.machineID

    }
  );

  const filter = { _id: ticketToSave.machineID };
  const update = {
    tickets: [ticketToSave]

  };

  // `doc` is the document _after_ `update` was applied because of
  // `new: true`
  Machine.findOneAndUpdate(filter, update, {
    new: true
  }).then(() => res.json('Ticket added!'))
    .catch(err => res.status(400).json('Error: ' + err))



})

router.get('/', (req, res) => {
  Machine
    .find()
    .then(machines => {
      res.status(200).json(machines)
    })
})
router.get('/tickets', (req, res) => {
  Ticket
    .find()
    .then(tickets => {
      res.status(200).json(tickets)
    })
})

router.put('/edit/:machineId', machineController.edit)
router.delete('/delete/:machineId', machineController.delete)

module.exports = router