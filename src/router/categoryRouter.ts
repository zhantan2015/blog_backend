import express from 'express'
import CategoryController from '../controller/categoryController';


const router = express.Router();

router.get('/',CategoryController.getCategory)
router.post('/', CategoryController.postCategory)

export default router;