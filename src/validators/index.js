import { body, param } from 'express-validator';

export const authValidators = {
  login: [
    body('email').isEmail().withMessage('valid email required'),
    body('password').isString().withMessage('password required'),
  ],
};

export const productValidators = {
  idParam: [param('id').isMongoId().withMessage('invalid id')],

  create: [
    body('name').notEmpty().withMessage('name required'),
    body('category').optional().isString().withMessage('category must be string'),
    body('price').isFloat({ gt: 0 }).withMessage('price must be positive'),
    body('quantity').isInt({ min: 0 }).withMessage('quantity must be non-negative integer'),
  ],

  update: [
    body('name').optional().notEmpty().withMessage('name required'),
    body('category').optional().isString().withMessage('category must be string'),
    body('price').optional().isFloat({ gt: 0 }).withMessage('price must be positive'),
    body('quantity').optional().isInt({ min: 0 }).withMessage('quantity must be non-negative integer'),
  ],
};

export default { authValidators, productValidators };
