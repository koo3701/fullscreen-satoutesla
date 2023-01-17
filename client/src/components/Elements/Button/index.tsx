import clsx from 'clsx';

export type ButtonPropsType = {
  className?: string;
  color?: 'primary' | 'secondary' | 'danger';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  submit?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
};
export const Button = ({
  className,
  color = 'primary',
  onClick,
  submit,
  disabled,
  children,
}: ButtonPropsType) => (
  <button
    type={submit ? 'submit' : 'button'}
    className={clsx(
      'rounded-lg border border-solid border-transparent py-px px-2 text-white outline-offset-4 focus:outline-4 focus:outline-blue-800 focus-visible:outline-4',
      color === 'primary' && 'bg-blue-400 hover:bg-blue-600',
      color === 'secondary' && 'bg-red-400 hover:bg-red-600',
      color === 'danger' && 'bg-black/0 text-red-500 outline-red-500 hover:bg-black/10',
      className
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
