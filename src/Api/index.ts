import { AuthController } from './../App/Controller/Auth/Auth.controller';
import { UserController } from './../App/Controller/Users/Users.controller';
import * as express from 'express';
import UserRouter from './Routes/Users/user.router';
import AuthRouter from './Routes/Auth/auth.router';

const appRouter = express();

const userRouter = new UserRouter(new UserController()).getRouter();
appRouter.use("/users", userRouter);

const authRouter = new AuthRouter(new AuthController()).getRouter();
appRouter.use("/auth", authRouter);

export { appRouter };
