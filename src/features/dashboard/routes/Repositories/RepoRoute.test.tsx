import { act, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { QueryParamProvider } from 'use-query-params';
import { store } from '../../../../shared/redux/store';
import { setAuthToken } from '../../../../../test/store/setAuthToken';
import RepoRoute from './RepoRoute';
import UserMiddleware from '../../../auth/components/UserMiddleware';
import RouteAdapter from '../../../../shared/RouteAdapter';

const arrange = (path: string) => {
  setAuthToken();

  const history = createMemoryHistory({
    initialEntries: [path]
  });

  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <QueryParamProvider ReactRouterRoute={RouteAdapter}>
          <UserMiddleware>
            <RepoRoute />
          </UserMiddleware>
        </QueryParamProvider>
      </Router>
    </Provider>
  );
};

describe('Feature/Repositories', () => {
  it('should render repositories route', async () => {
    act(() => {
      arrange('/');
    });

    expect(await screen.findByText(/repositories/i)).toBeDefined();
  });
});
