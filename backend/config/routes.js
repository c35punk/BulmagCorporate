const authRoutes = require("../routes/auth");
const machineRoutes = require("../routes/machine");
const productRoutes = require("../routes/product");

module.exports = app => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  }),
    app.use("/auth", authRoutes);
  app.use("/products", productRoutes);
  app.use("/dashboard", machineRoutes);
};
