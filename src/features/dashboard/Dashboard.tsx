import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AuthenticatedRoute from '../auth/components/AuthenticatedRoute';
import { useAuthUser } from '../auth/hooks/useAuthUser';
import Repositories from './routes/Repositories/Repositories';

const Dashboard = () => {
  const navigate = useNavigate();
  let user = useAuthUser();
  let location = useLocation();
  useEffect(() => {
    if (user) navigate('/repositories/', { replace: true, state: location.state });
  });

  return (
    <Routes>
      <Route path="/repositories" element={<Repositories />} />
    </Routes>
  );
};

export default Dashboard;