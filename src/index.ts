import App from "./app";
import pullRequestController from "./api/controllers/controller-factory/pull-request";
import * as bodyParser from "body-parser";

import express from "express";
require("dotenv").config();
require("./config/databases/mongoose");

const PORT = process.env.PORT;

const app = new App({
  port: Number(process.env.PORT),
  controllers: [
    pullRequestController
  ],
  middleWares: [
    express.json(),
    express.urlencoded({ extended: true }),
  ],
});

app.listen();
