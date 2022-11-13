import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <Analytics />
    </ChakraProvider>
  </React.StrictMode>
);

export const server = 'https://api.coingecko.com/api/v3';
