const authRoutes = require("../routes/auth");
const machineRoutes = require("../routes/machine");
const productRoutes = require("../routes/product");

module.exports = app => {
  app.use("/auth", authRoutes);
  app.use("/products", productRoutes);
  app.use("/dashboard", machineRoutes);
};
