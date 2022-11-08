import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import { routes } from './routes/Routes';

const App = () => (
  <div className='App'>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}/>
      ))}
    </Routes>
  </div>
)

export default App;
