import { useId } from 'react';

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
  };
export const TextField = ({ className, label, required, ...props }: TextFieldPropsType) => {
  const id = useId();
  return (
    <FieldWrapper className={className} htmlFor={id} label={label} required={required}>
      <input
        data-testid="input"
        id={id}
        className="w-full grow rounded border border-solid p-1"
        {...props}
      />
    </FieldWrapper>
  );
};
