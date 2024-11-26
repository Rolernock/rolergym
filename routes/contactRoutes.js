import express from 'express'
import { validateForm } from '../middleware/expressValidator.js'
import {
  sendMessage,
  readMessage,
  deleteMessage
} from '../controllers/contactController.js'
const router = express.Router()

router.route('/').post(validateForm, sendMessage).get(readMessage)
router.delete('/:msgId', deleteMessage)

export default router
