import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App2 from './App.jsx'
import { Practice } from './Practice.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
    {/* <App /> */}
    {/* <Practice /> */}
  </StrictMode>,
)
