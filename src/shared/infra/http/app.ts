import "reflect-metadata";

import express from "express";
import swaggerUi  from"swagger-ui-express";

import swaggerFile from "../../../swagger.json";

import  "express-async-errors";

import "@shared/container";

import createConnection from "@shared/infra/typeorm";

import { router } from "./routes";

import  responseFilter  from "./middlewares/response.filter";

createConnection()

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router, responseFilter);



export { app };
