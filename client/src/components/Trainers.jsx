import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

export default function Trainers() {
  const trainers = [
    {
      img: 'images/t1.jpg',
      name: 'Onyuka Uji',
      bio: 'With over 10 years of experience, Onyuka specializes in strength training and bodybuilding, helping clients sculpt their dream physique.'
    },
    {
      img: 'images/t2.jpg',
      name: 'Adiel Mbuzi',
      bio: 'Adiel is a certified yoga and Pilates instructor, focusing on flexibility, core strength, and overall mental well-being.'
    },
    {
      img: 'images/t3.jpg',
      name: 'Nyawawa Satan',
      bio: 'An expert in functional fitness, Nyawawa designs dynamic workout routines that improve mobility, endurance, and agility.'
    }
  ]

  return (
    <section className='layout_padding'>
      <div className='container'>
        <h2 className='text-center text-white my-large fw-logo'>
          Our Gym Trainers
        </h2>
        <Row>
          {trainers.map((trainer, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className='my-3'>
                <Card.Img variant='top' src={trainer.img} />
                <Card.Body>
                  <Card.Title>{trainer.name}</Card.Title>
                  <Card.Text className='fst-italic'>{trainer.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
