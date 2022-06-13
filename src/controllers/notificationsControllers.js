module.exports = ({ controllerWrapper, notificationsServices }) => {
  return {
    getNotifications(req, res, next) {
      const { uid } = req.params;
      return controllerWrapper.async(
        { uid },
        notificationsServices.getNotifications,
        res,
        next
      );
    },

    deleteNotification(req, res, next) {
      const { id } = req.query;
      return controllerWrapper.async(
        { id },
        notificationsServices.deleteNotification,
        res,
        next
      );
    },

    sendNotification(req, res, next) {
      return controllerWrapper.async(
        req.body,
        notificationsServices.sendNotification,
        res,
        next
      );
    },

    tickNotification(req, res, next) {
      const { id, check } = req.query;
      return controllerWrapper.async(
        { id, check },
        notificationsServices.tickNotification,
        res,
        next
      );
    },
  };
};
