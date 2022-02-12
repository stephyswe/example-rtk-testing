import { act, render, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { store } from '../../shared/redux/store';
import UserMiddleware from '../auth/components/UserMiddleware';
import { setAuthToken } from '../../../test/store/setAuthToken';
import Dashboard from './Dashboard';

describe('Feature/Dashboard', () => {
  it('should redirect to repositories', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/']
    });
    setAuthToken();

    act(() => {
      render(
        <Provider store={store}>
          <Router location={history.location} navigator={history}>
            <UserMiddleware>
              <Dashboard />
            </UserMiddleware>
          </Router>
        </Provider>
      );
    });

    await waitFor(() => {
      expect(history.location.pathname).toBe('/repositories');
    });
  });
});
