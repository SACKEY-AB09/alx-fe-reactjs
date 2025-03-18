import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserProfile from './components/UserProfile'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProfile />
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>,
)
