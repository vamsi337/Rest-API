var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});

var ninjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },

  rank: {
    type: String,
    required: [true, "Please specify the rank"],
  },

  available: {
    type: Boolean,
    default: false,
  },

  geometry: GeoSchema,
});

const Ninja = mongoose.model("ninja", ninjaSchema);

module.exports = Ninja;
