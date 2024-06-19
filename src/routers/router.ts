import { Router } from 'express';

// Import secondary routers
import userRouter from './userRouter';

// Create main router
const router = Router();

router.use(userRouter);

export default router;
