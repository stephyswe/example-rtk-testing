import { act, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { setAuthToken } from '../../../../../test/store/setAuthToken';
import { arrange } from '../../../../AppAuth';
import UserMiddleware from '../../../auth/components/UserMiddleware';
import Commits from './Commits';

export const arrangeCommitsRoute = (route: string = '/repositories/repositoryName') => {
  setAuthToken();
  arrange(
    route,
    <UserMiddleware>
      <Routes>
        <Route path="/repositories/:repositoryName" element={<Commits />} />
      </Routes>
    </UserMiddleware>
  );
};

describe('Route/Commits', () => {
  it('should render page title', async () => {
    act(() => {
      arrangeCommitsRoute();
    });
    expect(await screen.findByText(/commits/i)).toBeDefined();
  });
});
