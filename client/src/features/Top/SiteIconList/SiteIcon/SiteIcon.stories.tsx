import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { SiteIcon } from '@/features/Top/SiteIconList/SiteIcon';

type T = typeof SiteIcon;

/**
 * @private
 */
export default {
  title: 'features/Top/SiteIconList/SiteIcon',
  component: SiteIcon,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <SiteIcon {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
