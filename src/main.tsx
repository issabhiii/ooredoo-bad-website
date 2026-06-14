import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

console.error('NexusFlow analytics bootstrap failed: telemetry module unavailable');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
