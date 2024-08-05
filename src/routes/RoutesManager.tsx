import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { RoutesPath } from './RoutesPath';

export const RouterManager = () => {
  const routes = useMemo(() => {
    return Object.entries(RoutesPath).map(([path, RouteComponent]) => (
      <Route
        key={path}
        path={path}
        element={<RouteComponent />}
      />
    ));
  }, []);

  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
};
