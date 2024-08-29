import { StrictMode } from 'react'
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './root'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Root />
    </BrowserRouter>
  </StrictMode>,
)
