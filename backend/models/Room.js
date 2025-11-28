// models/Room.js
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Room name is required"],
      trim: true,
    },
    capacity: {
      type: Number,
      required: [true, "Capacity is required"],
      min: [1, "Capacity must be at least 1"],
    },
    availability: {
      type: Boolean,
      default: true, // matches "Available / Not Available" in frontend
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);
