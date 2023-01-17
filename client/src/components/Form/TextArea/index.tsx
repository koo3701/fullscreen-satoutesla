import { useId } from 'react';

import clsx from 'clsx';

import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper } from '@/components/Form/FieldWrapper';
import { InputParameter } from '@/components/Form/type';

export type TextAreaPropsType = Omit<React.ComponentProps<'textarea'>, 'id'> &
  InputParameter & {
    register?: UseFormRegisterReturn;
  };
export const TextArea = ({
  className,
  label,
  required,
  error,
  register,
  ...props
}: TextAreaPropsType) => {
  const id = useId();
  return (
    <FieldWrapper
      className={className}
      htmlFor={id}
      label={label}
      required={required}
      error={error}
    >
      <textarea
        id={id}
        className={clsx(
          'w-full grow resize-none rounded border border-solid p-1',
          error ? 'border-red-500 outline-red-500' : 'border-gray-400'
        )}
        {...props}
        {...register}
      />
    </FieldWrapper>
  );
};
