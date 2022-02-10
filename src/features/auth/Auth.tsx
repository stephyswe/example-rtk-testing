import { Routes, Route, Outlet } from 'react-router-dom';
import Login from './routes/Login/Login';
import OAuth from './routes/OAuth/OAuth';
import RequireAuth from './components/RequireAuth';

export default function Auth() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/private" element={<div>private</div>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/oauth" element={<OAuth />} />
    </Routes>
  );
}
