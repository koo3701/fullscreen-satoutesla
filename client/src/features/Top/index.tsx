import { useMemo } from 'react';

import { arrayMove } from '@dnd-kit/sortable';
import useLocalStorageState from 'use-local-storage-state';

import { defaultSiteList } from '@/features/Top/defaultSiteList';
import { FavMode } from '@/features/Top/FavMode';
import { SiteIconAddButton } from '@/features/Top/SiteIconAddButton';
import { SiteIconList, SiteIconListPropsType } from '@/features/Top/SiteIconList';
import { SiteListContext } from '@/features/Top/SiteListContext';

export const Top = () => {
  const [sites, setSites] = useLocalStorageState('sites', {
    defaultValue: defaultSiteList,
  });
  const providerValue = useMemo<[typeof sites, typeof setSites]>(
    () => [sites, setSites],
    [setSites, sites]
  );

  const handleDragEnd: SiteIconListPropsType['onDragEnd'] = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setSites((siteList) => {
        const oldIndex = siteList.findIndex((site) => site.id === active.id);
        const newIndex = siteList.findIndex((site) => site.id === over?.id);

        if (oldIndex < 0 || newIndex < 0) return siteList;

        return arrayMove(siteList, oldIndex, newIndex).map((site, i) => ({
          ...site,
          order: i,
        }));
      });
    }
  };

  return (
    <SiteListContext.Provider value={providerValue}>
      <div className="flex flex-row flex-wrap p-5">
        <SiteIconList onDragEnd={handleDragEnd} sites={sites} />
      </div>
      <FavMode className="absolute right-0 top-0 m-1" />
      <SiteIconAddButton className="absolute right-0 bottom-0 m-1" />
    </SiteListContext.Provider>
  );
};
