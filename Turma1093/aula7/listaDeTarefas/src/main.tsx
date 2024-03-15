import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import { Suspense } from 'react';

import './assets/index.css';
import router from './routes';
import LoadingPage from './components/Loading';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense
      fallback={<LoadingPage />}
    >
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
