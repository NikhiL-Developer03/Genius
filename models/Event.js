const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Event Title Must Required"]
  },
  shortDescription: {
    type: String,
    required: [true, "Event Short Description Must Required"]
  },
  longDescription: {
    type: String,
    required: [true, "Event Description Must Required"]
  },
  pic: {
    type: String,
    required: [true, "Event Pic Must Required"]
  },
  date: {
    type: Date,
    required: [true, "Event Date Must Required"]
  },
  active: {
    type: Boolean,
    default: true
  },
  createBy: {
    type: Strings
  },
  updateBy: []
}, { timestamps: true })

const Event = mongoose.model("event", eventSchema)
module.exports = Event