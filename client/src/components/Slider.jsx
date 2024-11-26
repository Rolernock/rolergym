import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Slider() {
  const slides = [
    {
      title: 'Shape Your Body',
      subtitle: 'Fitness Training',
      description:
        'We help you achieve your fitness goals with expert trainers.'
    },
    {
      title: 'Healthy Lifestyle',
      subtitle: 'Nutrition Guidance',
      description:
        'Fuel your body the right way with our expert nutritional advice.'
    },
    {
      title: 'Stay Motivated',
      subtitle: 'Group Workouts',
      description:
        'Join our group classes for an engaging and fun way to stay fit.'
    },
    {
      title: 'Reclaim Your Energy',
      subtitle: 'Cardio Programs',
      description:
        'Boost your stamina and endurance with our carefully designed cardio programs, perfect for all fitness levels.'
    },
    {
      title: 'Recover and Relax',
      subtitle: 'Wellness Services',
      description:
        'Enjoy post-workout recovery with our wellness services, including massages, saunas, and guided meditation sessions.'
    }
  ]

  return (
    <section className='slider_section overflow-hidden'>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className='d-flex align-items-center justify-content-center vh-100 vw-100'>
              <div className='text-center detail-box px-3'>
                <h3 className=' mb-3'>{slide.subtitle}</h3>
                <h2 className='mb-4'>{slide.title}</h2>
                <p className='mb-4 text-center px-5'>{slide.description}</p>
                <Button variant='outline-light' as={Link} to='/contact'>
                  Contact Us
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}
