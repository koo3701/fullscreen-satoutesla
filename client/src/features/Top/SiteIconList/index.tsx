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
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

import { SiteIcon } from '@/features/Top/SiteIconList/SiteIcon';
import { SitesType } from '@/features/Top/type';

/**
 * @package
 */
export type SiteIconListPropsType = {
  className?: string;
  sites: SitesType;
  onDragEnd: DndContextProps['onDragEnd'];
};
/**
 * @package
 */
export const SiteIconList = ({ className, sites, onDragEnd }: SiteIconListPropsType) => {
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  return (
    <div className={clsx('flex h-full w-full flex-row flex-wrap', className)}>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={sites} strategy={rectSortingStrategy}>
          {sites.map((site) => (
            <SiteIcon key={site.id} siteId={site.id} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};
