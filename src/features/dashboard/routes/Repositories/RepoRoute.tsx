import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import FullscreenProgress from '../../../../shared/components/FullscreenProgress';
import { useAuthUser } from '../../../auth/hooks/useAuthUser';
const Repositories = React.lazy(() => import('./Repositories'));
const CommitsRoute = React.lazy(() => import('../Commits/Commits'));

const RepoRoute = () => {
  const navigate = useNavigate();
  let user = useAuthUser();
  let location = useLocation();
  useEffect(() => {
    if (user) {
      navigate('/repositories', { replace: true, state: location.state });
    }
  }, [location.state, navigate, user]);

  return (
    <Suspense fallback={<FullscreenProgress />}>
      <Routes>
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/repositories/:repositoryName" element={<CommitsRoute />} />
      </Routes>
    </Suspense>
  );
};

export default RepoRoute;
