import { Navigate } from 'react-router-dom';

import Todo from '../pages/Todo/Todo';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Registration from '../pages/Registration/Registration';


export const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Registration />,
  },
  {
    path: '*',
    element: <Navigate to='/' />,
  },
]

export const userAllowedRoutes = [
  {
    path: '/',
    element: <Todo />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '*',
    element: <Navigate to='/' />,
  },
]
