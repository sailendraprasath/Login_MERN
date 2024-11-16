const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("emplyees", EmployeeSchema);

module.exports = EmployeeModel;
