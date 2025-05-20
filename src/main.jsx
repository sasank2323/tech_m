import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './Product.jsx'
import { Hi } from './hi.jsx'
import Form from './form.jsx'
import Number from './number.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Form />
   <Number />
  </StrictMode>
)


