import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'holderjs';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//api
//https://87dhy9.sse.codesandbox.io/resume/me

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
