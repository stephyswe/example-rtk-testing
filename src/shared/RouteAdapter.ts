import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * This is the main thing you need to use to adapt the react-router v6
 * API to what use-query-params expects.
 *
 * Pass this as the `ReactRouterRoute` prop to QueryParamProvider.
 */
export default function RouteAdapter({ children }: any) {
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
}
