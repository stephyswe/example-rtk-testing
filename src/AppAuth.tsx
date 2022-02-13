import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryParamProvider } from 'use-query-params';
import FullscreenProgress from './shared/components/FullscreenProgress';
import { store, persistor } from './shared/redux/store';
import RouteAdapter from './shared/RouteAdapter';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const AppAuth = ({ children }: any) => (
  <Provider store={store}>
    <PersistGate loading={<FullscreenProgress />} persistor={persistor}>
      <BrowserRouter>
        <QueryParamProvider ReactRouterRoute={RouteAdapter}>
          <CssBaseline />
          {children}
        </QueryParamProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export const arrange = (path: string, element: React.ReactElement) => {
  const history = createMemoryHistory({
    initialEntries: [path]
  });
  const renderResult = render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <QueryParamProvider ReactRouterRoute={RouteAdapter}>{element}</QueryParamProvider>
      </Router>
    </Provider>
  );

  return { renderResult, history };
};

export default AppAuth;
