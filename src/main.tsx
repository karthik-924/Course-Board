import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import store from './app/store'
import { Provider } from 'react-redux'
import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <Notifications />
        <App />
      </Provider>
    </MantineProvider>
  </React.StrictMode>,
)
