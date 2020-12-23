import express, { Router } from 'express';
import cors from 'cors';

export class Server {
  public readonly express: express.Application

  public constructor (
    routes: Router = Router(),
  ) {
    this.express = express();
    this.setup(routes);
  }

  private setup (routes: Router) {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use('/', routes);
  }
}