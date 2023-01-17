import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { TextField } from '@/components/Form/TextField';

type T = typeof TextField;

/**
 * @private
 */
export default {
  title: 'components/Form/TextField',
  component: TextField,
  args: {
    label: 'TextField',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <TextField {...args} />;

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
