import { Container, Form, Row, Col, Image, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../slices/messageSlice'

export default function ContactUs() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialState = { name: '', email: '', phone: '', message: '' }
  const [formData, setFormData] = useState(initialState)
  const { name, email, phone, message } = formData
  const handleChange = evt => {
    const { name, value } = evt.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  const handleSubmit = async evt => {
    evt.preventDefault()
    await dispatch(sendMessage(formData))
    navigate('/')
  }
  return (
    <>
      <Container className='mt-large'>
        <Row>
          <Col md={8} className='p-0'>
            <Image
              src='images/contact-img.jpg'
              alt='Contact Us'
              fluid
              rounded
            />
          </Col>
          <Col md={4}>
            <div className='m-zero'>
              <h2 className='text-white fw-logo mb-5'>Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='name' className='mb-3'>
                  <Form.Control
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId='email' className='mb-3'>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId='phone' className='mb-3'>
                  <Form.Control
                    type='text'
                    placeholder='Phone Number'
                    name='phone'
                    value={phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId='message' className='mb-3'>
                  <Form.Control
                    as='textarea'
                    rows={4}
                    placeholder='Message'
                    name='message'
                    value={message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant='outline-light' type='submit'>
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='text-center mt-5'>
        <Row className='justify-content-center text-white'>
          <Col xs={12} sm={4} className='mb-3'>
            <p>
              <strong>Location:</strong> Murang'a, 100m off Magunas Supermarket
            </p>
          </Col>
          <Col xs={12} sm={4} className='mb-3'>
            <p>
              <strong>Phone:</strong> +254 791483839
            </p>
          </Col>
          <Col xs={12} sm={4}>
            <p>
              <strong>Email:</strong> rolernockgoines@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
