import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({ redirectPath = '/', isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
}
