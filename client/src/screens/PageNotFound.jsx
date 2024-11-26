import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function PageNotFound() {
  return (
    <section className='text-center text-white'>
      <FaExclamationTriangle className='icon-large mb-4 ' />
      <h1 className='font-bold mb-4'>404 Page Not Found</h1>
      <p className='text-bold mb-4'>This page does not exist</p>
      <Link to='/' className='dark-text text-white'>
        Go Back
      </Link>
    </section>
  )
}
