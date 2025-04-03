import { errorHandlerMiddleware } from '#app/middleware/index.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();

// Add your global middleware here
app.use(cors());
app.use(bodyParser.json());

// Add more of your routes here

// Error Handling Middleware, should always be the last
app.use(errorHandlerMiddleware);

// ❌ DO NOT REMOVE PART BELOW
export default app;
