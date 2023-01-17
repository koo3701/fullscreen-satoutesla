import { Navigate, RouteObject } from 'react-router-dom';

import { Open } from '@/features/Open';
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
  {
    path: '/open',
    element: <Open />,
  },
] satisfies RouteObject[];
