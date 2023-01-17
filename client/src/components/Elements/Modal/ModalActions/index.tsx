import clsx from 'clsx';

import { Divider } from '@/components/Elements/Divider';

export type ModalActionsPropsType = {
  className?: string;
  children: React.ReactNode;
};
export const ModalActions = ({ className, children }: ModalActionsPropsType) => (
  <div>
    <Divider />
    <div
      className={clsx(
        'h-auto w-full overflow-hidden text-ellipsis whitespace-nowrap pt-1 text-xl leading-8',
        className
      )}
    >
      {children}
    </div>
  </div>
);
