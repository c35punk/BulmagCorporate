const express = require('express')
const authCheck = require('../config/auth-check')
const Machine = require('../models/Machine')
const machineController = require('../controllers/machine-controller')

const router = new express.Router()

function validateCreateForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''


  if (!payload || typeof payload.manufacturer !== 'string') {
    isFormValid = false
    errors.manufacturer = 'Please, enter a valid manufacturer.'
  }

  if (!payload || typeof payload.serialNumber !== 'string' || !payload.serialNumber.regex(/[A-Za-z0-9]/)) {
    isFormValid = false
    errors.serialNumber = 'Please, enter a valid serial number.'
  }
  if (!payload || typeof payload.productNumber !== 'string' || !payload.productNumber.regex(/[A-Za-z0-9]/)) {
    isFormValid = false
    errors.productNumber = 'Please, enter a valid product number.'
  }

  if (!payload || typeof payload.machineName !== 'string') {
    isFormValid = false
    errors.machineName = 'Please, enter a valid machine name.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const machineObj = req.body
  if (req.user.roles.indexOf('Admin') > -1) {
    const validationResult = validateCreateForm(machineObj)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    Machine
      .create(machineObj)
      .then((createdMachine) => {
        res.status(200).json({
          success: true,
          message: 'Machine added successfully.',
          data: createdMachine
        })
      })
      .catch((err) => {
        console.log(err)
        let message = 'Something went wrong :( Check the form for errors.'
        if (err.code === 11000) {
          message = 'Model with the given name already exists.'
        }
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.get('/all', (req, res) => {
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