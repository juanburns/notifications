const moment = require("moment");
const { Schema, model } = require("mongoose");

const notificationSchema = new Schema({
  user: Number,
  content: String,
  view: Boolean,
  datetime: { type: String, default: `${moment().format("DD/MM/YYYY HH:mm")}` },
});

const Notification = model("Notification", notificationSchema);

module.exports = Notification;
