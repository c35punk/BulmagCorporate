const authRoutes = require("../routes/auth");
const machineRoutes = require("../routes/machine");
const productRoutes = require("../routes/product");
const usersRoutes = require("../routes/user");

module.exports = app => {
  app.use("/auth", authRoutes);
  app.use("/products", productRoutes);
  app.use("/dashboard", machineRoutes);
  app.use("/users", usersRoutes);
};
