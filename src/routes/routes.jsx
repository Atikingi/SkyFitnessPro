import { Routes, Route } from 'react-router-dom';
import UserProfile from '../pages/UserProfile/UserProfile';
import { MainFitnessPage } from '../pages/MainSkyFitnessProPage/MainFitnessProPage';
import { CourseDescription } from '../pages/CourseDescriptionPages/CourseDescription';
import CourseProgressPage from '../pages/CourseProgressPage/CourseProgressPage';
import NotFound from '../components/NotFound/NotFound';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { getAuthStatus } from '../store/selectors/authSelector';

const AppRoutes = () => {
  const isLogin = useSelector(getAuthStatus);

  return (
    <Routes>
      <Route path="/" element={<MainFitnessPage />}></Route>

      <Route path="course/:id" element={<CourseDescription />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(isLogin)} />}>
        <Route path="profile" element={<UserProfile />}></Route>
        <Route path="/course/:id/progress/" element={<CourseProgressPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
