import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import AppContext from './Helper/AppContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <AppContext>
          <App />

        </AppContext>




      </MantineProvider>


    </BrowserRouter>

  </React.StrictMode>,
)
