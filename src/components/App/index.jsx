import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => (
  <>
    <Header />
    <Home />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
