import { Router, Request, Response, NextFunction } from 'express';

export default class UserRouter {
  private readonly router: Router;
  constructor () {
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
      this.router.post("/", (req: Request, res: Response, next: NextFunction) => {
        res.send("postUser");
        next();
      });
    },
    put: () => {
      this.router.put("/", (req: Request, res: Response, next: NextFunction) => {
        res.send("putUser");
        next();
      });
    },
    delete: () => {
      this.router.delete("/", (req: Request, res: Response, next: NextFunction) => {
        res.send("deleteUser");
        next();
      });
    }
  };

  getRouter (): Router {
    console.log("oja");
    this.createRoutes.get();
    this.createRoutes.post();
    return this.router;
  }
}
