import { Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import OAuth from './routes/OAuth';
import RequireAuth from './components/RequireAuth';

export default function Auth() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/private" element={<div>private</div>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/oauth" element={<OAuth />} />
      <Route path="/" element={<></>} />
    </Routes>
  );
}
