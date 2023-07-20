import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Property from './pages/Property';
import City from './pages/City';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='city/:id' element={<City />} />
          <Route path='property/:id' element={<Property />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
