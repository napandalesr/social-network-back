import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { Express } from 'express';

export default class Server {
  private readonly app: Express;

  constructor () {
    this.app = express();
    this.midleware();
  }

  midleware (): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  getApp (): Express {
    return this.app;
  }

  public Start: () => Promise<void> = async () => {
    const PORT = process.env.PORT;
    this.app.set('port', parseInt(PORT) || 3000);
    return await new Promise((resolve, reject) => {
      this.app.listen(
        this.app.get('port'),
        () => {
          resolve(this.app.get('port'));
        })
        .on('error', (err: object) => reject(err));
    });
  };
}
