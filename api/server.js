const express = require("express");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStorage = require("connect-session-knex")(session);

const apiRouter = require("./apiRouter.js");
const knexConnection = require("../data/dbConfig.js");

const server = express();
const sessionConfiguration = {
  name: "gee",
  secret: process.env.COOKIE_SECRET || "is it secret? is it safe",
  cookies: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV === "development" ? false : true,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: true,
  store: new KnexSessionStorage({
    knex: knexConnection,
    clearInterval: 1000 * 60 * 10,
    tablename: "user_sessions",
    sidfieldname: "id",
    createtable: true
  })
};

server.use(express.json());
server.use(cors());
server.use(session(sessionConfiguration));

server.use("/api", apiRouter);

module.exports = server;
