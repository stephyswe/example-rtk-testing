import { act, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { setAuthToken } from '../../../../../test/store/setAuthToken';
import { store } from '../../../../shared/redux/store';
import RouteAdapter from '../../../../shared/RouteAdapter';
import UserMiddleware from '../../../auth/components/UserMiddleware';
import Commits from './Commits';

export const arrangeCommitsRoute = () => {
  const history = createMemoryHistory({
    initialEntries: ['/repositories/repositoryName']
  });
  setAuthToken();

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <QueryParamProvider ReactRouterRoute={RouteAdapter}>
          <UserMiddleware>
            <Routes>
              <Route path="/repositories/:repositoryName" element={<Commits />} />
            </Routes>
          </UserMiddleware>
        </QueryParamProvider>
      </Router>
    </Provider>
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
