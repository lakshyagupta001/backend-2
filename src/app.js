import express from 'express';
import morgan from 'morgan';
import errorHandler from './middleware/errorHandling.js';
import userRouter from './routes/user.route.js';

const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.use('/api/users', userRouter);//is a middleware in Express.js that mounts the userRouter on the specified path.
// This means that any requests that start with /api/users will be handled by the userRouter.
// For example, if we have a route defined in userRouter for GET /, it will be accessible at /api/users/.
// This allows us to organize our routes and keep our main app file clean and modular.

app.use(errorHandler);
export default app;