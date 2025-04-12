const mongoose = require("mongoose");
const { HoldingSchema } = require("../schemas/HoldingSchema");

// No `new` here — model() returns a constructor
const HoldingsModel = mongoose.model("Holding", HoldingSchema);

module.exports = HoldingsModel;
