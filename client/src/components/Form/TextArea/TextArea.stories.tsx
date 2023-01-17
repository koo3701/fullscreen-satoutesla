import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { TextArea } from '@/components/Form/TextArea';

type T = typeof TextArea;

/**
 * @private
 */
export default {
  title: 'components/Form/TextArea',
  component: TextArea,
  args: { label: 'TextArea' },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <TextArea {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

/**
 * @private
 */
export const Required = Template.bind({});
Required.args = { required: true };

/**
 * @private
 */
export const Error = Template.bind({});
Error.args = { error: { type: 'min', message: 'Error Message !' } };
