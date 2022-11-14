import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react'
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Auth0Provider
        domain="dev-qq7nl5zmcwircstx.us.auth0.com"
        clientId="beJtkNaU5QcdNn8IF7htclckg9ZHEA37"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
      <Analytics />
    </ChakraProvider>
  </React.StrictMode>
);

export const server = 'https://api.coingecko.com/api/v3';
