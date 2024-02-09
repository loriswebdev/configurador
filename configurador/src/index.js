import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ModelProvider } from './components/hooks/ModelProvider';

import './assets/scss/main.scss'

ReactDOM.createRoot(
  document.getElementById('root')
).render(  <StrictMode>
  <ModelProvider>

  <App />

  </ModelProvider>
  </StrictMode>,);


