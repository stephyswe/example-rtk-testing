import { act, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { QueryParamProvider } from 'use-query-params';
import { store } from '../../shared/redux/store';
import RouteAdapter from '../../shared/RouteAdapter';
import Auth from './Auth';

const arrange = (path: any) => {
  const history = createMemoryHistory({
    initialEntries: [path]
  });
  const renderResult = render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <QueryParamProvider ReactRouterRoute={RouteAdapter}>
          <Auth />
        </QueryParamProvider>
      </Router>
    </Provider>
  );

  return { renderResult, history };
};

describe('Feature/Auth', () => {
  it('should render nothing', async () => {
    act(() => {
      const {
        renderResult: { container }
      } = arrange('/');
      expect(container.innerHTML).toBe('');
    });
  });

  it('should render Login page', async () => {
    act(() => {
      arrange('/login');
    });
    const githubLoginLink = screen.getByRole('link', { name: /login/i });
    expect(githubLoginLink).toBeDefined();
  });

  it('should render OAuth page', async () => {
    act(() => {
      arrange('/oauth?code=code');
    });

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeDefined();
  });
});
