import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import React from 'react';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import { Dashboard, Login } from './view';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
