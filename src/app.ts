import express, { Request, Response } from 'express';
import cors from 'cors';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import { notFound } from './middlewares/notFound';

// Create an express application
const app = express();

// Set up middleware functions
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(ExpressMongoSanitize({
  dryRun: true,
  onSanitize: ({ req, key }) => {
    console.warn(`[DryRun] This request[${key}] will be sanitized`, req);
  },
}))

// Set up routing
app.use('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

// Set up 404 error handler
app.use(notFound);

// Export the Express application
export default app;