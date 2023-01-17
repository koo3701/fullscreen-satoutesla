import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { SiteIconList } from '@/features/Top/SiteIconList';

type T = typeof SiteIconList;

/**
 * @private
 */
export default {
  title: 'features/Top/SiteIconList',
  component: SiteIconList,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <SiteIconList {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
