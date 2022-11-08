import { Navigate } from 'react-router-dom';


export const routes = [
  {
    path: '/',
    element: <div>Home</div>
  },
  {
    path: '/login',
    element: <div>Login</div>
  },
  {
    path: '/register',
    element: <div>Register</div>
  },
  {
    path: '*',
    element: <Navigate to='/' />,
  },
]