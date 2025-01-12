import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Common/Footer.jsx'
import Header from './Components/Common/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>,
)
