import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import ReadMessages from './screens/ReadMessages'
import PageNotFound from './screens/PageNotFound'
import WhyChooseUs from './components/WhyChooseUs'
import Slider from './components/Slider'
import ContactUs from './components/ContactUs'
import Trainers from './components/Trainers'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Slider />} />
        <Route path='/why' element={<WhyChooseUs />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/msg' element={<ReadMessages />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
