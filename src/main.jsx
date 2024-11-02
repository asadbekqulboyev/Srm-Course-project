import { StrictMode } from 'react'
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './root'
import ContextProvider from './context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <BrowserRouter>
    <Root />
    </BrowserRouter>
    </ContextProvider>
  </StrictMode>,
)
