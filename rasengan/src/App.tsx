import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';

import { routes } from './routes/Routes';
import Navigation from './components/Navigation/Navigation';

const App = () => (
  <div className='App'>
    <Navigation>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}/>
        ))}
      </Routes>
    </Navigation>
  </div>
)

export default App;
