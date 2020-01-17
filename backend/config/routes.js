const authRoutes = require("../routes/auth");
const machineRoutes = require("../routes/machine");
const productRoutes = require("../routes/product");
const serviceRoutes = require("../routes/service");
const mailRoutes = require("../routes/mail")
const cors = require('cors')

module.exports = app => {
  app.use(cors())
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
  app.use("/auth", authRoutes);
  app.use("/products", productRoutes);
  app.use("/machines", machineRoutes);
  app.use("/services", serviceRoutes)
  app.use("/mail", mailRoutes)
};
