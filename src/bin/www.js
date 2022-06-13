"use strict";

const app = require("../app");
const http = require("http");
require("dotenv").config();

const port = process.env.PORT;

const normalizedPort = normalizePort(port);
app.set("port", normalizedPort);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case "EACCES":
      console.error(`[ERROR] ${bind} requires elevated privileges`);
      process.exit(1);
    case "EADDRINUSE":
      console.error(`[ERROR] ${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}

process.on("uncaughtException", (err) => {
  console.error(`[ERROR] Uncaught Exception ocurred ${err.message}`, err);
  throw err;
});

process.on("unhandledRejection", (err) => {
  console.error(`[ERROR] Unhandled Rejection Ocurred ${err.message}`, err);
});
