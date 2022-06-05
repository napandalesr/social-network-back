import { IUsers } from './../../../App/Ports/index';
import { Router, Request, Response, NextFunction } from 'express';

export default class UserRouter {
  private readonly router: Router;
  constructor (private readonly users: IUsers) {
    this.router = Router();
  }

  createRoutes = {
    get: () => {
      this.router.get("/", (req: Request, res: Response, next: NextFunction) => {
        res.send("gerUser");
        next();
      });
    },
    getId: () => {
      this.router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
        res.send("gerUser");
        next();
      });
    },
    post: () => {
      this.router.post("/", async (req: Request, res: Response, next: NextFunction) => {
        const response = await this.users.create(req.body);
        res.status(response.status).json(response);
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
    this.createRoutes.get();
    this.createRoutes.getId();
    this.createRoutes.post();
    this.createRoutes.put();
    this.createRoutes.delete();
    return this.router;
  }
}
