import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryParamProvider } from 'use-query-params';
import FullscreenProgress from './shared/components/FullscreenProgress/FullscreenProgress';
import { persistor, store } from './shared/redux/store';
import Auth from './features/auth/Auth';
import UserMiddleware from './features/auth/components/UserMiddleware';
import './index.css';
import RouteAdapter from './shared/RouteAdapter';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<FullscreenProgress />} persistor={persistor}>
        <Router>
          <QueryParamProvider ReactRouterRoute={RouteAdapter}>
            <CssBaseline />
            <UserMiddleware>
              <Auth />
            </UserMiddleware>
          </QueryParamProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
