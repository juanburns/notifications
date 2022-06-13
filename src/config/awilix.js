const { Lifetime, createContainer } = require("awilix");
const { scopePerRequest } = require("awilix-express");

module.exports = ({ app }) => {
  const container = createContainer();
  container.loadModules(
    [
      ["*/client/*.js"],
      ["*/services/*.js"],
      ["*/controllers/*.js"],
      ["*/utils/*.js"],
    ],
    {
      formatName: "camelCase",
      resolverOptions: {
        lifetime: Lifetime.SCOPED,
      },
    }
  );

  app.use(scopePerRequest(container));
};
