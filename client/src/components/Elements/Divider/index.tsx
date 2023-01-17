import clsx from 'clsx';

export type DividerPropsType = {
  className?: string;
  vertical?: boolean;
};
export const Divider = ({ className, vertical }: DividerPropsType) => (
  <div
    data-testid="divider"
    className={clsx(
      'border-gray-300',
      vertical ? 'inline-block h-full w-px border-r' : 'h-px w-full border-b',
      className
    )}
  />
);
