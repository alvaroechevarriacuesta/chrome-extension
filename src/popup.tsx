import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SigninForm from './components/SigninForm';
import './index.css';

createRoot(document.getElementById('popup-root')!).render(
  <StrictMode>
    <SigninForm isPopup={true} />
  </StrictMode>
);