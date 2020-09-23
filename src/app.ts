import dotenv from "dotenv";

import cors from "cors";
import express, { Express } from "express";

import routes from "./app/routes";
// import "./database";

dotenv.config();

class App {
  public server: Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
