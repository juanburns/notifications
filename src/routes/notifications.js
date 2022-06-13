const router = require("express").Router();
const { makeInvoker } = require("awilix-express");
const notificationsController = require("../controllers/notificationsControllers");

const api = makeInvoker(notificationsController);

router.get("/getNotifications/uid/:uid", api("getNotifications"));
router.post("/sendNotification", api("sendNotification"));
router.get("/deleteNotification/", api("deleteNotification"));
router.get("/tickNotification/", api("tickNotification"));

module.exports = router;
