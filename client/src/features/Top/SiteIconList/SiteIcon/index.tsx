import { useMemo, useState } from 'react';

import clsx from 'clsx';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useLongPress, LongPressEventReason, LongPressDetectEvents } from 'use-long-press';

import { useSite } from '@/features/Top/hooks/useSite';
import { SiteIconEditModal } from '@/features/Top/SiteIconEditModal';

/**
 * @package
 */
export type SiteIconPropsType = {
  className?: string;
  siteId: string | number;
};
/**
 * @package
 */
export const SiteIcon = ({ className, siteId }: SiteIconPropsType) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: siteId,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const site = useSite(siteId);

  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => setModalOpen(false);

  const handleShortPress = () => {
    if (site !== undefined) window.location.href = site.url;
  };

  const handleLongPress = () => setModalOpen(true);
  const longPressListener = useLongPress(() => handleLongPress(), {
    threshold: 750,
    onCancel: (_, meta) => {
      if (meta.reason !== LongPressEventReason.CANCELED_BY_MOVEMENT) handleShortPress();
    },
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });

  const touchAction = useMemo(
    () => (isDragging ? /* tw */ 'touch-none' : /* tw */ 'touch-auto'),
    [isDragging]
  );

  const id = `icon-${siteId}`;

  return site !== undefined ? (
    <>
      <div
        id={id}
        className={clsx(
          'flex h-52 w-52 flex-col items-center justify-center',
          touchAction,
          isDragging ? 'z-50 opacity-30' : 'z-auto opacity-100',
          className
        )}
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        {...longPressListener()}
      >
        <img
          src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
            site.url
          )}&size=128`}
          alt={site.title}
          className={clsx('h-3/4', touchAction)}
        />
        <p className={clsx('overflow-hidden text-ellipsis whitespace-nowrap', touchAction)}>
          {site.title}
        </p>
      </div>
      <SiteIconEditModal siteId={siteId} isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  ) : null;
};
