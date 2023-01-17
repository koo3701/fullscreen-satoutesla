import { createContext } from 'react';

import { defaultSiteList } from '@/features/Top/defaultSiteList';
import { SitesType } from '@/features/Top/type';

/**
 * @package
 */
export const SiteListContext = createContext<
  [SitesType, React.Dispatch<React.SetStateAction<SitesType>> | undefined]
>([defaultSiteList, undefined]);
