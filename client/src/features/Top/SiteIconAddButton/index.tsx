import { ComponentProps } from 'react';

import clsx from 'clsx';

import { MdAddCircle } from 'react-icons/md';

/**
 * @package
 */
export type SiteIconAddButtonPropsType = {
  className?: string;
  onClick: ComponentProps<'button'>['onClick'];
};
/**
 * @package
 */
export const SiteIconAddButton = ({ className, onClick }: SiteIconAddButtonPropsType) => (
  <button type="button" onClick={onClick}>
    <MdAddCircle
      className={clsx('hover:cursor-pointer', className)}
      size={60}
      title="MdAddCircle"
    />
  </button>
);
