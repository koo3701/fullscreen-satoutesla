import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Divider } from '@/components/Elements/Divider';

type T = typeof Divider;

/**
 * @private
 */
export default {
  title: 'components/Elements/Divider',
  component: Divider,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Divider {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
