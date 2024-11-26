import React from 'react'
import { Button } from 'react-bootstrap'

export default function HealthyMind() {
  return (
    <section className='healthy_section layout_padding'>
      <div className='container'>
        <h2>HEALTHY MIND, HEALTHY BODY</h2>
        <p>
          At RolerGym, we believe that mental health is as important as physical
          health. Our holistic approach combines workouts with mindfulness
          practices to create a balanced lifestyle. Join us to experience the
          perfect harmony between body and mind.
        </p>
        <Button href='#read-more' variant='primary'>
          Read More
        </Button>
      </div>
    </section>
  )
}
