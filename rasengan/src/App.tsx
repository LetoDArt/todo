import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { Alert, ThemeProvider } from '@mui/material';

import Navigation from './components/Navigation/Navigation';

import { useRoutesDefiner } from './hooks/useRootDefiner';
import { useGetterAuthorizationOnMount } from './hooks/useGetterAuthorizationOnMount';

import { customMainTheme } from './theme/customMainTheme';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const routes = useRoutesDefiner();

  useGetterAuthorizationOnMount()

  return (
    <div className='App'>
      <ThemeProvider theme={customMainTheme}>
        <Navigation>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element}/>
            ))}
          </Routes>
        </Navigation>
        <Alert severity='success'>success</Alert>
      </ThemeProvider>
      <ToastContainer limit={3} theme='light' position='top-center'/>
    </div>
  )
}

export default App;
