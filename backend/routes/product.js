const express = require("express");
const authCheck = require("../config/auth-check");
const Product = require("../models/Product");

const router = new express.Router();

router.post("/add-product", (req, res) => {
  const productObj = req.body;

  const productToSave = new Product(productObj);
  productToSave.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err))

}) 

router.get("/", (req, res) => {
  Product.find().then(products => {
    res.status(200).json(products);
  });
});
module.exports = router;