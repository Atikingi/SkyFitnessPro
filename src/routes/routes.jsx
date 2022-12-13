import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { MainFitnessPage } from '../pages/MainSkyFitnessProPage/MainFitnessProPage';
import UserProfile from '../pages/UserProfile/UserProfile';
import { CourseDescription } from '../components/CourseDescription/CourseDescription';
import CourseProgressPage from '../pages/CourseProgressPage/CourseProgressPage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainFitnessPage />}></Route>
        <Route path="yoga" element={<CourseDescription />}></Route>
        {/*<protected route>*/}
        <Route path="profile" element={<UserProfile />}></Route>
        <Route path="profile/progress" element={<CourseProgressPage />}></Route>
        {/*</protected route>*/}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
