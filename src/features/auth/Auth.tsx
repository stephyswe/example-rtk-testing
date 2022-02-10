import { Routes, Route } from 'react-router-dom';
import Login from './routes/Login/Login';
import OAuth from './routes/OAuth/OAuth';
import RequireAuth from './components/RequireAuth';

const Auth = () => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/oath" element={<OAuth />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Auth;
