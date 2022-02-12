import { act, render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Route, Router, Routes } from 'react-router';
import { setAuthToken } from '../../../../test/store/setAuthToken';
import { store } from '../../../shared/redux/store';
import { AuthenticatedRouteProps } from './AuthenticatedRoute';
import RequireAuth from './RequireAuth';
import UserMiddleware from './UserMiddleware';

function AuthWrapper({ route }: any) {
  return route === '/public' ? <>PUBLIC</> : <RequireAuth>TEST</RequireAuth>;
}

const arrange = (route: string = '/test') => {
  const history = createMemoryHistory({
    initialEntries: [route]
  });

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <UserMiddleware>
          <Routes>
            <Route path={route} element={<AuthWrapper route={route} />} />
          </Routes>
        </UserMiddleware>
      </Router>
    </Provider>
  );

  return { history };
};

describe('Component/RequireAuth', () => {
  it('should redirect to login', async () => {
    await act(async () => {
      const { history } = arrange();

      await waitFor(() => {
        expect(history.location.pathname).toBe('/login');
      });
    });
  });

  it('should render auth route content', async () => {
    act(() => {
      setAuthToken();
      arrange();
    });

    const content = await screen.findByText(/test/i);
    expect(content).toBeDefined();
  });

  it('should render public route content', async () => {
    act(() => {
      arrange('/public');
    });

    const content = await screen.findByText(/public/i);
    expect(content).toBeDefined();
  });
});
