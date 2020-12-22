import express from 'express';
import cors from 'cors';

class Server {
  public express: express.Application

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());this.express.use(cors());
  }

  // private database() {}

  private routes() {
    this.express.get('/', (req, res) => {
      return res.send('Hello World');
    });
  }
}

export default new Server().express;