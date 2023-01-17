import { useCallback, useMemo, useState } from 'react';

import useLocalStorageState from 'use-local-storage-state';

import { defaultSiteList } from '@/features/Top/defaultSiteList';
import { FavMode } from '@/features/Top/FavMode';
import { SiteIconAddButton } from '@/features/Top/SiteIconAddButton';
import { SiteIconEditModal } from '@/features/Top/SiteIconEditModal';
import { SiteIconList } from '@/features/Top/SiteIconList';
import { SiteListContext } from '@/features/Top/SiteListContext';

export const Top = () => {
  const [sites, setSites] = useLocalStorageState('sites', {
    defaultValue: defaultSiteList,
  });
  const providerValue = useMemo<[typeof sites, typeof setSites]>(
    () => [sites, setSites],
    [setSites, sites]
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSiteId, setModalSiteId] = useState<string | number | undefined>();

  const handleOpenModal = useCallback((siteId?: string | number) => {
    setModalSiteId(siteId);
    setModalOpen(true);
  }, []);
  const handleCloseModal = useCallback(() => setModalOpen(false), []);

  return (
    <SiteListContext.Provider value={providerValue}>
      <SiteIconList className="p-5" onLongPress={handleOpenModal} />
      <FavMode className="absolute right-0 top-0 m-2" />
      <SiteIconAddButton
        className="absolute right-0 bottom-0 m-1"
        onClick={() => handleOpenModal()}
      />
      <SiteIconEditModal isOpen={modalOpen} onClose={handleCloseModal} siteId={modalSiteId} />
    </SiteListContext.Provider>
  );
};
