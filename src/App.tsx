import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryParamProvider } from 'use-query-params';
import FullscreenProgress from './shared/components/FullscreenProgress/FullscreenProgress';
import { persistor, store } from './shared/redux/store';
import Auth from './features/auth/Auth';
import './index.css';
import React from 'react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<FullscreenProgress />} persistor={persistor}>
        <Router>
          <QueryParamProvider ReactRouterRoute={RouteAdapter}>
            <CssBaseline />
            <Auth />
          </QueryParamProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;

/**
 * This is the main thing you need to use to adapt the react-router v6
 * API to what use-query-params expects.
 *
 * Pass this as the `ReactRouterRoute` prop to QueryParamProvider.
 */
const RouteAdapter = ({ children }: any) => {
  const navigate: any = useNavigate();
  const location: any = useLocation();

  const adaptedHistory = React.useMemo(
    () => ({
      replace(location: { state: any }) {
        navigate(location, { replace: true, state: location.state });
      },
      push(location: { state: any }) {
        navigate(location, { replace: false, state: location.state });
      }
    }),
    [navigate]
  );
  return children({ history: adaptedHistory, location });
};
