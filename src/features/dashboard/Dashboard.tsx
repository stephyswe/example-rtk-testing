import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../auth/components/RequireAuth';
import RepoRoute from './routes/Repositories/RepoRoute';

const Dashboard = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <></>
          </RequireAuth>
        }
      />
      <Route path="/repositories/*" element={<RepoRoute />} />
    </Routes>
  );
};

export default Dashboard;
