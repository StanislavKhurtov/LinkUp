import React from 'react'

import { App } from '@/app/App'
import ReactDOM from 'react-dom/client'

import './shared/config/i18n/i18n'
import '@/app/styles/_style.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
