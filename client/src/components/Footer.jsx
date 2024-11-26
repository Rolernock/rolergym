import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <Container>
      <Row className='mt-5'>
        <Col className='text-center text-white'>
          <Link className='text-white mb-5 custom-underline' to='/contact'>
            Contact Us
          </Link>
          <p className='mt-3'>RolerGym &copy; {currentYear}</p>
        </Col>
      </Row>
    </Container>
  )
}
