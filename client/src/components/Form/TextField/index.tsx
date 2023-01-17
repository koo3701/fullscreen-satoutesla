import { useId } from 'react';

import clsx from 'clsx';

import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper } from '@/components/Form/FieldWrapper';
import { InputParameter } from '@/components/Form/type';

/**
 * @package
 */
export const allowTypeList = [
  'text',
  'email',
  'password',
] as const satisfies readonly React.ComponentProps<'input'>['type'][];

export type TextFieldPropsType = Omit<React.ComponentProps<'input'>, 'id'> &
  InputParameter & {
    type: typeof allowTypeList[number];
    register?: UseFormRegisterReturn;
  };
export const TextField = ({
  className,
  label,
  required,
  error,
  register,
  ...props
}: TextFieldPropsType) => {
  const id = useId();
  return (
    <FieldWrapper
      className={className}
      htmlFor={id}
      label={label}
      required={required}
      error={error}
    >
      <input
        data-testid="input"
        id={id}
        className={clsx(
          'w-full grow rounded border border-solid p-1',
          error ? 'border-red-500 outline-red-500' : 'border-gray-400'
        )}
        {...props}
        {...register}
      />
    </FieldWrapper>
  );
};
