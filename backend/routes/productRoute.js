import express from 'express';
import { addproduct, listproducts, removeproduct, singleproduct } from '../controllers/productControllers.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';


const productRoute = express.Router();

productRoute.post('/add',  upload.single('image'), addproduct);
productRoute.get('/list', listproducts);
productRoute.post('/remove/:id', adminAuth, removeproduct);
productRoute.get('/single/:id', singleproduct);

export default productRoute;