import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import JerseysPage from "./Jerseys.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <JerseysPage />
  </StrictMode>,
)
