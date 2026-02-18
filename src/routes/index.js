import express from 'express';
import {
  MainController,
  HomeController,
  about,
  greet,
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
 
  
} from '../controllers/main-controller.js';

import {
 getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
  } from '../controllers/student-controller.js';
  
const router = express.Router();

// Existing routes
router.get('/', HomeController.getWelcome);
router.get('/health', MainController.getStatus);

// Step 4: Simple Routes
router.get('/about', about);
router.get('/greet/:name', greet);

// Step 5: Products CRUD
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.post('/students', createStudent);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

export default router;
