const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  code: String,
  name: String,
  districts: [String],
});

module.exports = mongoose.model(
  "State",
  stateSchema,
  "Indian-states-districts"
);
