module.exports = () => {
  return {
    determinedDestiny: (shippingWay) => {
      return shippingWay == "correo" ? "sendPerEmail" : "sendPerSystem";
    },
  };
};
