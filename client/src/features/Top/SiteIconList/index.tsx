import { useContext } from 'react';

import clsx from 'clsx';

import {
  DndContextProps,
  useSensors,
  useSensor,
  PointerSensor,
  TouchSensor,
  DndContext,
  closestCenter,
} from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable';

import { SiteIcon, SiteIconPropsType } from '@/features/Top/SiteIconList/SiteIcon';
import { SiteListContext } from '@/features/Top/SiteListContext';

/**
 * @package
 */
export type SiteIconListPropsType = {
  className?: string;
  onLongPress: SiteIconPropsType['onLongPress'];
};
/**
 * @package
 */
export const SiteIconList = ({ className, onLongPress }: SiteIconListPropsType) => {
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  const [sites, setSites] = useContext(SiteListContext);

  const handleDragEnd: DndContextProps['onDragEnd'] = (event) => {
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
    <div className={clsx('flex h-full w-full flex-row flex-wrap', className)}>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={sites} strategy={rectSortingStrategy}>
          {sites.map((site) => (
            <SiteIcon key={site.id} siteId={site.id} onLongPress={onLongPress} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};
