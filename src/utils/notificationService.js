require("dotenv").config();
const nodemailer = require("nodemailer");
const NotificationModel = require("../mongo/notificationModel");

const notificationsMocks = require("../mocks/notificationsMocks");

const user = process.env.EMAIL
const pass = process.env.PASS

module.exports = function () {
  async function saveDataOnDB(content) {
    try {
      const notification = new NotificationModel(content);
      await notification.save();
      return "Notificación enviada exitosamente.";
    } catch (err) {
      throw Error("Error al guardar notificación.");
    }
  }

  function sendPerEmail(content, addresses) {
    var sender = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      secureConnection: false,
      port: 587,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user,
        pass,
      },
    });

    var mail = {
      from: `"${user}" <${user}>`,
      to: addresses.join(","),
      subject: `Prospect by Juan Burns`,
      text: content,
    };

    sender.sendMail(mail, (error, info) => {
      if (error) {
        throw error;
      } else {
        return "Contenido enviado exitosamente";
      }
    });
  }
  return {
    sendNotification({ addresses, ...rest }) {
      return {
        sendPerEmail: () => {
          return sendPerEmail(rest, addresses);
        },
        sendPerSystem: () => {
          addresses.map((uid) => {
            return saveDataOnDB({ ...rest, user: uid });
          });
        },
      };
    },

    async getNotifications({ uid }) {
      return await NotificationModel.find({ user: uid })
    },

    async deleteNotification(id) {
      return await NotificationModel.findOneAndDelete({ _id: id })
    },

    async tickNotification({ id, check }) {
      try {
        return await NotificationModel.findOneAndUpdate({ _id: id }, { view: check })
      } catch (err) {
        throw Error("Error al definir vista de notificación.");
      }
    },
  };
};
