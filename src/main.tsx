import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store.ts';
import { Provider } from 'react-redux';
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
