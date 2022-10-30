import { Express } from "express";
import getApp from "./src/getApp";
import routePing from "./src/routes/ping";
import startServer from "./src/startServer";

const app: Express = getApp();

app.get("/ping", routePing);

startServer(app);
