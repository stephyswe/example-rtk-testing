import { Routes, Route } from 'react-router-dom';
import Login from './routes/Login/Login';
import OAuth from './routes/OAuth/OAuth';

const Auth = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/oauth" element={<OAuth />} />
    </Routes>
  );
};

export default Auth;
