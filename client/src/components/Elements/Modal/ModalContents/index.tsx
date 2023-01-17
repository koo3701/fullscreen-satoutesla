import clsx from 'clsx';

export type ModalContentsPropsType = {
  className?: string;
  children: React.ReactNode;
};
export const ModalContents = ({ className, children }: ModalContentsPropsType) => (
  <div className={clsx('w-full grow overflow-y-auto whitespace-normal', className)}>{children}</div>
);
