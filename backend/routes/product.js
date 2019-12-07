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

  // Product.create(productObj)
  //   .then(createdProduct => {
  //     res.status(200).json({
  //       success: true,
  //       message: "Product created successfully.",
  //       data: createdProduct
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     const message = "Something went wrong :(";
  //     return res.status(200).json({
  //       success: false,
  //       message: message
  //     });
  //   });
// });

router.get("/", (req, res) => {
  Product.find().then(products => {
    res.status(200).json(products);
  });
});
module.exports = router;
