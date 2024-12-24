import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavigationContextProvider } from './context/useNavigationContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavigationContextProvider>
        <App/>
      </NavigationContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
