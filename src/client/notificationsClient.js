module.exports = ({ notificationsUtils, notificationService }) => {
  return {
    async sendNotification({ shippingWay, ...rest }) {
      return notificationService.sendNotification(rest)[notificationsUtils.determinedDestiny(shippingWay)]();
    },

    async getNotifications({ uid }){
        return notificationService.getNotifications({ uid })
    },

    async deleteNotification({ id }){
        return notificationService.deleteNotification(id)
    },

    async tickNotification({ id, check }){
        return notificationService.tickNotification({ id, check })
    }
  };
};
