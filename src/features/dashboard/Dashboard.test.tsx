import { act, waitFor } from '@testing-library/react';
import UserMiddleware from '../auth/components/UserMiddleware';
import { setAuthToken } from '../../../test/store/setAuthToken';
import Dashboard from './Dashboard';
import { arrange } from '../../AppAuth';

describe('Feature/Dashboard', () => {
  it('should redirect to repositories', async () => {
    setAuthToken();
    let newHistory: any;

    act(() => {
      const { history } = arrange(
        '/',
        <UserMiddleware>
          <Dashboard />
        </UserMiddleware>
      );
      newHistory = history;
    });

    await waitFor(() => {
      expect(newHistory.location.pathname).toBe('/repositories/');
    });
  });
});
