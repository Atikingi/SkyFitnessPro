import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainFitnessPage } from '../pages/MainSkyFitnessProPage/MainFitnessProPage';
import UserProfile from '../pages/UserProfile/UserProfile';
import { CourseDescription } from '../pages/CourseDescriptionPages/CourseDescription';
import CourseProgressPage from '../pages/CourseProgressPage/CourseProgressPage';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../store/selectors/authSelector';
import NotFound from '../components/NotFound/NotFound';

const AppRoutes = () => {
  const isLogin = useSelector(getAuthStatus);

  return (
    <Routes>
      <Route path="/" element={<MainFitnessPage />}></Route>

      <Route path="course/:id" element={<CourseDescription />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(isLogin)} />}>
        <Route path="profile" element={<UserProfile />}></Route>
        <Route path="profile/progress" element={<CourseProgressPage />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
