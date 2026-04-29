import express from 'express';
import { authValidators } from '../validators/index.js';
import { login } from '../controllers/authController.js';
import validate from '../middleware/validate.js';

const router = express.Router();
// post /auth/login
router.post('/login', authValidators.login, validate, login);

export default router;
