import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Property from './pages/Property';
import CityPage from './pages/CityPage';
import AuthorizationPage from './pages/AuthorizationPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='city/:id' element={<CityPage />} />
          <Route path='property/:id' element={<Property />} />
          <Route path='Authorization' element={<AuthorizationPage />} />
          <Route path='favorites/:id' element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
