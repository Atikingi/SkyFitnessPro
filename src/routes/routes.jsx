import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { MainFitnessPage } from '../pages/MainSkyFitnessProPage/MainFitnessProPage';
import UserProfile from '../pages/UserProfile/UserProfile';
import { CourseDescription } from '../components/CourseDescription/CourseDescription';
import CourseProgressPage from '../pages/CourseProgressPage/CourseProgressPage';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../store/selectors/authSelector';
const AppRoutes = () => {
  const isLogin = useSelector(getAuthStatus); //здесь вместо true будет или токен (при jwt) или другой показатель с trufy значением

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainFitnessPage />}></Route>
        <Route path="yoga" element={<CourseDescription />}></Route>
        <Route element={<ProtectedRoute redirectPath isAllowed={Boolean(isLogin)} />}>
          <Route path="profile" element={<UserProfile />}></Route>
          <Route path="profile/progress" element={<CourseProgressPage />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
