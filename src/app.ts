import express from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "@routes";

export const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

RegisterRoutes(app);
