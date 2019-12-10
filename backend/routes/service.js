const express = require("express");
const Service = require("../models/Service");
const authCheck = require('../config/auth-check')

const router = new express.Router();

router.post("/add-service", authCheck, (req, res) => {
  const serviceObj = req.body;

  const serviceToSave = new Service(serviceObj);
  serviceToSave.save()
    .then(() => res.json('Service added!'))
    .catch(err => res.status(400).json('Error: ' + err))

})

router.get("/", (req, res) => {
  Service.find().then(services => {
    res.status(200).json(services);
  });
});
module.exports = router;