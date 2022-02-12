import React, { FC } from 'react';
import { Navigate, Route, RouteProps } from 'react-router';
import { useAuthUser } from '../hooks/useAuthUser';

export type AuthenticatedRouteProps = {
  onlyPublic?: boolean;
} & RouteProps;

const AuthenticatedRoute: FC<AuthenticatedRouteProps> = ({ children, onlyPublic = false, ...routeProps }) => {
  const user = useAuthUser();

  return (
    <Route
      {...routeProps}
      element={({ location }: any) => {
        if (onlyPublic) {
          return !user ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: '/'
              }}
              state={{ from: location }}
            />
          );
        }

        return user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/login'
            }}
            state={{ from: location }}
          />
        );
      }}
    />
  );
};

export default AuthenticatedRoute;
