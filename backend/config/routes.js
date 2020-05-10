const authRoutes = require("../routes/auth");
const machineRoutes = require("../routes/machine");
const productRoutes = require("../routes/product");
const mailRoutes = require("../routes/mail")
const cors = require('cors')

module.exports = app => {
  app.use(cors({ origin: '*' }));
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use("/auth", authRoutes);
  app.use("/products", productRoutes);
  app.use("/machines", machineRoutes);
  app.use("/mail", mailRoutes)
}