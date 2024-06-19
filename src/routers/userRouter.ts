import { Router } from 'express';

// Import middlewares
const auth = require('../middleware/auth');

// Import controllers
const { signup } = require('../controllers/userControllers/signup');
const { login } = require('../controllers/userControllers/login');

// Create router
const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);

// userRouter.get('/profile', getProfile);
// userRouter.patch('/profile', updateProfile);
// userRouter.delete('/profile', deleteProfile);

export default userRouter;
