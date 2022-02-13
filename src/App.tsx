import Dashboard from './features/dashboard/Dashboard';
import './index.css';
import AppAuth from './AppAuth';
import Auth from './features/auth/Auth';
import UserMiddleware from './features/auth/components/UserMiddleware';

const App = () => (
  <AppAuth>
    <UserMiddleware>
      <Auth />
      <Dashboard />
    </UserMiddleware>
  </AppAuth>
);

export default App;
