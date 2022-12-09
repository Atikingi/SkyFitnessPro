import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { MainFitnessPage } from '../pages/MainSkyFitnessProPage/MainFitnessProPage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* тут Routes с путями на страницы Ильи */}
        <Route index element={<MainFitnessPage />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
