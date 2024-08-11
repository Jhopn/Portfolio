import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { RoutesPath } from './RoutesPath';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

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
      <Navbar/>
      <Routes>{routes}</Routes>
      <Footer/>
    </BrowserRouter>
  );
};
