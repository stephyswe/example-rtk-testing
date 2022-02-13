import { act, screen } from '@testing-library/react';
import { setAuthToken } from '../../../../../test/store/setAuthToken';
import RepoRoute from './RepoRoute';
import UserMiddleware from '../../../auth/components/UserMiddleware';
import { arrange } from '../../../../AppAuth';

const setupArrange = (route: string = '/') => {
  arrange(
    route,
    <UserMiddleware>
      <RepoRoute />
    </UserMiddleware>
  );
};

describe('Feature/Repositories', () => {
  it('should render repositories route', async () => {
    act(() => {
      setAuthToken();
      setupArrange('/');
    });

    expect(await screen.findByText(/repositories/i)).toBeDefined();
  });

  it('should render commits route', async () => {
    act(() => {
      setAuthToken();
      setupArrange('/:repositoryName');
    });

    expect(await screen.findByText(/commits/i)).toBeDefined();
  });
});
