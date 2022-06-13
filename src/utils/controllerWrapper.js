module.exports = () => {
  return {
    async async(params, service, res, next) {
      try {
        const resp = await service(params);
        res.status(200).send(resp);
      } catch (err) {
        next(err);
      }
    },
  };
};
