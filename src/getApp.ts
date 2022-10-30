import bodyParser from "body-parser";
import express from "express";

const cors = require("cors");

export default function getApp() {
  const app = express();
  app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: true,
      optionsSuccessStatus: 204,
    })
  );
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
    })
  );
  app.use(bodyParser.text({ limit: "50mb" }));

  app.disable("x-powered-by");

  return app;
}
