import express from 'express';
import asyncWrapper from '../utils/asyncWrapper.js';
import {
    registerUser,
    loginUser,
    getAllUsers,
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', asyncWrapper(registerUser));
router.post('/login', asyncWrapper(loginUser));
router.get('/', asyncWrapper(getAllUsers));

export default router;
