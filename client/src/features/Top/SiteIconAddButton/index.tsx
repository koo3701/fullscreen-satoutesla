import { useCallback, useState } from 'react';

import clsx from 'clsx';

import { MdAddCircle } from 'react-icons/md';

import { SiteIconEditModal } from '@/features/Top/SiteIconEditModal';

/**
 * @package
 */
export type SiteIconAddButtonPropsType = {
  className?: string;
};
/**
 * @package
 */
export const SiteIconAddButton = ({ className }: SiteIconAddButtonPropsType) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setModalOpen(true), []);
  const handleCloseModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <MdAddCircle
        className={clsx('hover:cursor-pointer', className)}
        size={60}
        onClick={handleOpenModal}
      />
      <SiteIconEditModal isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
};
