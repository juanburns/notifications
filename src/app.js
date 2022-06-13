const express = require("express");
const app = express();
const configAwilix = require("./config/awilix");
const notificationsRouter = require("./routes/notifications");
const handlerError = require("./errors/handlerError");

require("./mongo/client")()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configAwilix({ app });

app.use("/notifications", notificationsRouter);
app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  next(err);
});
app.use(handlerError);

module.exports = app;
