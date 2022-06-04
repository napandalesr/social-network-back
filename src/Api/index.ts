import * as express from 'express';
import UserRouter from './Routes/Users/user.router';

const appRouter = express();

const userRouter = new UserRouter().getRouter();
appRouter.use("/users", userRouter);

export { appRouter };
