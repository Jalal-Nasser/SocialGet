import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.css'
import { SessionContextProvider } from '@/components/auth/SessionContextProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
)