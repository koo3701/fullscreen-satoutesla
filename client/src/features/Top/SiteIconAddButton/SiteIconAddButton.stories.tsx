import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { SiteIconAddButton } from '@/features/Top/SiteIconAddButton';

type T = typeof SiteIconAddButton;

/**
 * @private
 */
export default {
  title: 'features/Top/SiteIconAddButton',
  component: SiteIconAddButton,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <SiteIconAddButton {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
