import express from 'express';

declare global {
  namespace Express {
    interface Request {
      auth?: Record<string, any>;
    }
  }
}
