import { lazy } from 'react';

import App from '../components/App'
const Login = lazy(() => import('../components/Login'));

import {
  RouteObject,
  createBrowserRouter,
} from "react-router-dom"

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <App />,
  },
];

const router = createBrowserRouter(routes);

export default router;