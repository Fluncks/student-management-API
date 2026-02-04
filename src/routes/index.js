import express from 'express';
import { MainController, HomeController } from '../controllers/main-controller.js';

const router = express.Router();

router.get('/', HomeController.getWelcome);
router.get('/health', MainController.getStatus);

export default router;
