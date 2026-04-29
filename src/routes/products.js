import express from 'express';
import validate from '../middleware/validate.js';
import authenticate from '../middleware/auth.js';
import authorizeAdmin from '../middleware/authorizeAdmin.js';
import * as controller from '../controllers/productController.js';
import { productValidators } from '../validators/index.js';

const router = express.Router();

// GET /products
router.get('/', controller.listProducts);

// GET /products/:id
router.get('/:id', productValidators.idParam, validate, controller.getProduct);

// POST /products
router.post('/',
  authenticate,
  authorizeAdmin,
  productValidators.create,
  validate,
  controller.createProduct,
);

// PUT /products/:id
router.put('/:id',
  authenticate,
  authorizeAdmin,
  productValidators.idParam,
  productValidators.update,
  validate,
  controller.updateProduct,
);

// DELETE /products/:id
router.delete('/:id', authenticate, authorizeAdmin, productValidators.idParam, validate, controller.deleteProduct);

export default router;
