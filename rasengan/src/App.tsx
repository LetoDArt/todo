import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import { customMainTheme } from './theme/customMainTheme';
import { routes } from './routes/Routes';

import './App.scss';


const App = () => (
  <div className='App'>
    <ThemeProvider theme={customMainTheme} >
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

export default App;
