import { check } from 'express-validator'

export const validateForm = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Email is required').isEmail().normalizeEmail(),
  check('phone', 'Phone number is required').notEmpty(),
  check('message', 'Message is required').notEmpty()
]
