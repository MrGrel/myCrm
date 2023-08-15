import { Navigate, useRoutes } from 'react-router-dom';
import { Crm } from './pages/crm';
import { ClientCard } from './pages/clientCard';
import { NavBar } from './layouts/NavBar/NavBar';

export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <NavBar />,
      children: [
        { element: <Navigate to="crm/1" />, index: true },
        {
          path: 'crm/:page',
          element: <Crm />,
          children: [],
        },
        {
          path: 'crm/:page/client/:id',
          element: <ClientCard />,
        },
      ],
    },
  ]);
  return routes;
};
