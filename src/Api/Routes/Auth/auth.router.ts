import { IAuth } from './../../../App/Ports/index';
import { Router, Request, Response, NextFunction } from 'express';

export default class AuthRouter {
  private readonly router: Router;
  constructor (private readonly auth: IAuth) {
    this.router = Router();
  }

  createRoutes = {
    get: () => {
      this.router.get("/", (req: Request, res: Response, next: NextFunction) => {
        res.send("gerUser");
        next();
      });
    },
    post: () => {
      this.router.post("/", async (req: Request, res: Response, next: NextFunction) => {
        const response = await this.auth.auth(req.body);
        res.status(response.status).json(response);
        next();
      });
    }
  };

  getRouter (): Router {
    this.createRoutes.post();
    return this.router;
  }
}
