import { validationResult } from 'express-validator'
import ContactModel from '../models/contactModel.js'

//@route - POST - api/contact
//@desc - send message
export const sendMessage = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
  try {
    const { name, email, phone, message } = req.body
    const messageInfo = { name, email, phone, message }
    await ContactModel.create(messageInfo)
    return res.json({ msg: 'Message Sent!' })
  } catch (err) {
    let msg = err.message
    res.status(500).json({ errors: [{ msg }] })
  }
}

//@route - GET - api/contact
//desc - read messages
export const readMessage = async (req, res) => {
  const contact = await ContactModel.find()
  if (!contact) {
    res.status(404)
    return res.json({ msg: 'No messages found!' })
  }
  return res.json(contact)
}

//@route - DELETE - api/contact
//@desc - delete message
export const deleteMessage = async (req, res) => {
  const { msgId } = req.params
  const message = await ContactModel.findById(msgId)
  if (!message) {
    res.status(404)
    return res.json({ msg: 'Message Not Found!' })
  }
  await ContactModel.findByIdAndDelete(msgId)
  return res.json({ msg: 'Message deleted!' })
}
