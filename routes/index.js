import express from 'express';
import auth from './auth'
import { authenticateToken } from '../middlewares/authenticateToken';
const router = express.Router();
router.use('/auth',auth);
export default router;