const express = require('express')
const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

const router = new express.Router()

function validateSignupForm(payload) {
  const errors = {}
  let isFormValid = true

  console.log(payload)

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length < 4) {
    isFormValid = false
    errors.username = 'Username must be at least 4 characters long'
  }

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false
    errors.email = 'Please provide a correct email address'
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false
    errors.password = 'Password must be at least 8 characters long'
  }
  if (!payload || !payload.passwordMatch) {
    isFormValid = false
    errors.repeatPassword = 'Passwords must match'
  }
  if (!payload || typeof payload.companyName !== 'string' || payload.companyName.trim().length < 2) {
    isFormValid = false
    errors.companyName = 'Company name must be at least 2 characters long'
  }

  if (!payload || typeof payload.address !== 'string' || payload.address.trim().length < 8) {
    isFormValid = false
    errors.address = 'Address must be at least 8 characters long'
  }
  if (!payload || typeof payload.contactPerson !== 'string' || payload.contactPerson.trim().length < 8) {
    isFormValid = false
    errors.contactPerson = 'Contact Person must be at least 3 characters long'
  }
  if (!payload || typeof payload.vatNumber !== 'string' || payload.vatNumber.substr(0, 2) !== 'BG') {
    isFormValid = false
    errors.vatNumber = 'VAT Number must start with "BG" followed by 9 digits'
  }

  if (!payload || typeof payload.companyImage !== 'string' || payload.companyImage.substr(0, 4) !== 'http') {
    isFormValid = false
    errors.companyImage = 'IMAGE link must start with "http"'
  }
  if (!payload || !payload.agree) {
    isFormValid = false
    errors.agree = 'You must accept our Terms and Conditions'
  }

  if (!isFormValid) {
    errors.message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    errors
  }
}

function validateLoginForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0 || !validator.isEmail(payload.email)) {
    isFormValid = false
    errors.email = 'Please provide your email address.'
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false
    errors.password = 'Please provide your password.'
  }

  if (!isFormValid) {
    message = 'Incorrect username or password.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/signup', (req, res, next) => {
  const validationResult = validateSignupForm(req.body)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      errors: validationResult.errors
    })
  }

  return passport.authenticate('local-signup', (err) => {
    if (err) {
      return res.status(200).json({
        success: false,
        message: err
      })
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.'
    })
  })(req, res, next)
})

router.get('/users', (req, res) => {
  User
    .find({ $or: [{ roles: ['User'] }, { roles: [] }] }, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
    .then(users => {
      let usersToReturn = [];
      users.forEach(user => {
        let userToAdd = {
          id: user._id,
          email: user.email,
          roles: user.roles,
          username: user.username,
          companyName: user.companyName,
          address: user.address,
          contactPerson: user.contactPerson,
          vatNumber: user.vatNumber,
          companyImage: user.companyImage
        }

        usersToReturn.push(userToAdd)
      });

      res.status(200).json(usersToReturn)
    })
})

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(200).json({
          success: false,
          message: err.message
        })
      }

      return res.status(200).json({
        success: false,
        message: 'Could not process the form.'
      })
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    })
  })(req, res, next)
})

module.exports = router
