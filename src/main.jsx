import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
// import { LandingPage } from './LandingPage'
import { MantineProvider} from '@mantine/core'

import { LandingPage } from './LandingPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={{
      colorScheme: 'dark',
      }} withGlobalStyles withNormalizeCSS >
      
      <LandingPage/>
   </MantineProvider>
  </React.StrictMode>,
)
