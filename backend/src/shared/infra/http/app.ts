import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import express, { json, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { AppError } from '@/shared/errors/AppError';
import '@/shared/container';
import { routes } from './routes';

const app = express();

// middlewares
app.use(json());
app.use(cors());

// routes
app.use(routes);

// global erros
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server Error - ${err.message}`,
    });
  }
);

export { app };
