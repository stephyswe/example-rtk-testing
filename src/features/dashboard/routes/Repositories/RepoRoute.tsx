import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import FullscreenProgress from '../../../../shared/components/FullscreenProgress';
const Repositories = React.lazy(() => import('./Repositories'));
const CommitsRoute = React.lazy(() => import('../Commits/Commits'));

const RepoRoute = () => (
  <Suspense fallback={<FullscreenProgress />}>
    <Routes>
      <Route path="/" element={<Repositories />} />
      <Route path="/:repositoryName" element={<CommitsRoute />} />
    </Routes>
  </Suspense>
);

export default RepoRoute;
