import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if ('virtualKeyboard' in navigator) {
  // @ts-ignore - virtualKeyboard is not standard yet in TypeScript DOM
  navigator.virtualKeyboard.overlaysContent = true;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
