import express from 'express';
import { createInitialUser,loginUser} from '../controllers/authController.js';  
const router = express.Router();

// Route to create the initial user
router.post('/user', createInitialUser);
router.post('/login', loginUser);

export default router;