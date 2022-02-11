import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import FullscreenProgress from '../../../../shared/components/FullscreenProgress';
import RequireAuth from '../../../auth/components/RequireAuth';
const Repositories = React.lazy(() => import('./Repositories'));

const RepoRoute = () => {
  return (
    <Suspense fallback={<FullscreenProgress />}>
      <Route>
        <Route element={<RequireAuth />}>
          <Repositories />
        </Route>
      </Route>
    </Suspense>
  );
};

export default RepoRoute;
