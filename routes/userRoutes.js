import express from 'express';
import userController from '../controller/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/users', userController.getAllUsers);

router.get('/protected', auth, (req, res) => {
    res.json({ message: 'Welcome to the protected route!' });
});

export default router;
