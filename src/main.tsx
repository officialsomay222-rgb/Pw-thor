import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// VirtualKeyboard API opt-in removed to prevent TWA keyboard lag
// Relying on standard viewport resize behavior instead

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
