import { act, screen, waitFor } from '@testing-library/react';
import { Route, Routes } from 'react-router';
import { setAuthToken } from '../../../../test/store/setAuthToken';
import { arrange } from '../../../AppAuth';
import RequireAuth from './RequireAuth';
import UserMiddleware from './UserMiddleware';

const setupArrange = (route: string = '/test') => {
  const { history } = arrange(
    route,
    <UserMiddleware>
      <Routes>
        <Route path={route} element={route === '/public' ? <>PUBLIC</> : <RequireAuth>TEST</RequireAuth>} />
      </Routes>
    </UserMiddleware>
  );
  return { history };
};

describe('Component/RequireAuth', () => {
  it('should redirect to login', async () => {
    await act(async () => {
      const { history } = setupArrange();

      await waitFor(() => {
        expect(history.location.pathname).toBe('/login');
      });
    });
  });

  it('should render auth route content', async () => {
    act(() => {
      setAuthToken();
      setupArrange();
    });

    const content = await screen.findByText(/test/i);
    expect(content).toBeDefined();
  });

  it('should render public route content', async () => {
    act(() => {
      setupArrange('/public');
    });

    const content = await screen.findByText(/public/i);
    expect(content).toBeDefined();
  });
});
