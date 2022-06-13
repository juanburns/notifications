module.exports = ({ notificationsClient }) => {
  return {
    getNotifications(params) {
      return notificationsClient.getNotifications(params);
    },

    sendNotification(params) {
      return notificationsClient.sendNotification(params);
    },

    deleteNotification(params) {
      return notificationsClient.deleteNotification(params);
    },

    tickNotification(params) {
      return notificationsClient.tickNotification(params);
    },
  };
};
