import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* тут Routes с путями на страницы Ильи */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
