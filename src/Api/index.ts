import { UserController } from './../App/Controller/Users/Users.controller';
import * as express from 'express';
import UserRouter from './Routes/Users/user.router';

const appRouter = express();

const userRouter = new UserRouter(new UserController()).getRouter();
appRouter.use("/users", userRouter);

export { appRouter };
