import { Navigate, Outlet } from 'react-router';
import { useAuthUser } from '../hooks/useAuthUser';
import { useLocation } from 'react-router-dom';

function RequireAuth() {
  let user = useAuthUser();
  let location = useLocation();

  console.log('user', user);

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default RequireAuth;
