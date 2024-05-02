import express from 'express';
import auth from './auth'
import notifications from './fireBase'
import { authenticateToken } from '../middlewares/authenticateToken';
const router = express.Router();
router.use('/auth',auth);
router.use('/notifications',notifications)
export default router;