import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import { useRoutesDefiner } from './hooks/useRootDefiner';
import { useGetterAuthorizationOnMount } from './hooks/useGetterAuthorizationOnMount';

import { customMainTheme } from './theme/customMainTheme';

import './App.scss';


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
      </ThemeProvider>
    </div>
  )
}

export default App;
