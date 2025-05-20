import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './Product.jsx'
import { Hi } from './hi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Product />
   <Product />
   <Hi num={3000} />
  </StrictMode>
)


