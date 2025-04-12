const mongoose = require("mongoose");
const { PositionSchema } = require("../schemas/PositionSchema");

// Create the model using mongoose.model
const PositionsModel = mongoose.model("Position", PositionSchema);

// Export the model to use in routes or controllers
module.exports = PositionsModel;
