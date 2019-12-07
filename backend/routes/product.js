const express = require("express");
const authCheck = require("../config/auth-check");
const Product = require("../models/Product");

const router = new express.Router();

router.post("/add-product", authCheck, (req, res) => {
  const productObj = req.body;
 
  Product.create(productObj)
    .then(createdProduct => {
      res.status(200).json({
        success: true,
        message: "Product created successfully.",
        data: createdProduct
      });
    })
    .catch(err => {
      console.log(err);
      const message = "Something went wrong :(";
      return res.status(200).json({
        success: false,
        message: message
      });
    });
});

router.get("/products", authCheck, (req, res) => {
  Product.find().then(products => {
    res.status(200).json(products);
  });
});
module.exports = router;
