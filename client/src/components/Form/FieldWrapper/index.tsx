import clsx from 'clsx';

import { InputParameter } from '@/components/Form/type';

/**
 * @package
 */
export type FieldWrapperPropsType = InputParameter & {
  className?: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
};
/**
 * @package
 */
export const FieldWrapper = ({
  className,
  htmlFor,
  label,
  required,
  children,
}: FieldWrapperPropsType) => (
  <div className={clsx('flex flex-col', className)}>
    <label className="block text-sm font-bold text-gray-400" htmlFor={htmlFor}>
      {label}
      {required ? <span className="pl-1 text-red-400">*</span> : null}
    </label>
    {children}
  </div>
);
