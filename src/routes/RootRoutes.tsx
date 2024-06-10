import { Routes, Route } from 'react-router-dom';
import { RoutesMap } from './routesMap';
import MainPage from 'pages/MainPage';
import ErrorPage from 'pages/ErrorPage';
import NotFound from 'pages/NotFound';
import TopRating from 'pages/TopRating';

const RootRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesMap.MainPage} element={<MainPage />} />
      <Route path={RoutesMap.TopRating} element={<TopRating />} />
      <Route path={RoutesMap.ErrorPage} element={<ErrorPage />} />
      <Route path={RoutesMap.NotFound} element={<NotFound />} />
    </Routes>
  );
};

export default RootRoutes;
