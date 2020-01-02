const express = require('express')
const Machine = require('../models/Machine')
const Ticket = require('../models/Ticket')
const machineController = require('../controllers/machine-controller')
const multer = require('multer')
const uuidv4 = require('uuid/v4')

const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

const router = new express.Router()

router.post("/create", (req, res) => {
  const machineObj = req.body;

  console.log(machineObj)


  const machineToSave = new Machine(machineObj);
  machineToSave.save()
    .then(() => res.json('Machine added!'))
    .catch(err => res.status(400).json('Error: ' + err))

})


router.post("/add-ticket", upload.single('uploadedFile'), (req, res) => {

  const url = req.protocol + '://' + req.get('host')
  const ticketObj = req.body;

  console.log(req)
  console.log(ticketObj)


  const ticketToSave = new Ticket({
    systemType: req.body.systemType,
    component: req.body.component,
    failureDescription: req.body.failureDescription,
    uploadedFile: url + '/public/' + 'name',
    creatorID: req.body.creatorID
  });
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