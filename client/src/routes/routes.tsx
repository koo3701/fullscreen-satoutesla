import { Navigate, RouteObject } from 'react-router-dom';

import { Top } from '@/features/Top';

/**
 * @package
 */
export const routes = [
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
  {
    path: '/',
    element: <Top />,
  },
] satisfies RouteObject[];
