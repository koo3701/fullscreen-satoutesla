import { useContext } from 'react';

import { SiteListContext } from '@/features/Top/SiteListContext';
import { SiteType } from '@/features/Top/type';

export const useSite: (siteId?: string | number) => SiteType | undefined = (siteId) => {
  const sites = useContext(SiteListContext)[0];
  return siteId !== undefined ? sites.find((site) => site.id === siteId) : undefined;
};
