import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

export default function WhyChooseUs() {
  const features = [
    {
      img: 'images/u-1.png',
      title: 'QUALITY EQUIPMENT',
      description:
        'We provide high-quality gym equipment that caters to all your fitness needs, ensuring safety and efficiency in your workouts.'
    },
    {
      img: 'images/u-4.png',
      title: 'PERSONALIZED TRAINING',
      description:
        'Our certified trainers design personalized workout plans to help you reach your fitness goals effectively.'
    },
    {
      img: 'images/u-2.png',
      title: 'NUTRITION COACHING',
      description:
        'Achieve better results with guidance from our nutrition experts who ensure you maintain a balanced and healthy diet.'
    },
    {
      img: 'images/u-3.png',
      title: 'FLEXIBLE SCHEDULES',
      description:
        'With our flexible timings, you can work out whenever it suits you, without compromising on your busy schedule.'
    }
  ]

  return (
    <section className='py-5'>
      <Container>
        <h1 className='text-center text-white fw-logo mb-large'>
          Why Choose Us
        </h1>
        <Row>
          {features.map((feature, index) => (
            <Col lg={3} md={6} key={index}>
              <Card className='box p-3 my-2'>
                <Card.Img
                  variant='top'
                  className='feature-img'
                  src={feature.img}
                />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
