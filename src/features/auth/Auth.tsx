import { Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import OAuth from './routes/OAuth';
import RequireAuth from './components/RequireAuth';

export default function Auth() {
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
      <Route path="/login" element={<Login />} />
      <Route path="/oauth" element={<OAuth />} />
    </Routes>
  );
}
