import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Testimonials from './pages/Testimonials'
import Collection from './pages/Collection'
import Product from './pages/Product'

const App = () => {
  return (
    <main className='overflow-x-hidden text-[#404040]'> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </main>
  )
}

export default App
 