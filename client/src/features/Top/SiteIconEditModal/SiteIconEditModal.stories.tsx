import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { SiteIconEditModal } from '@/features/Top/SiteIconEditModal';

type T = typeof SiteIconEditModal;

/**
 * @private
 */
export default {
  title: 'features/Top/SiteIconEditModal',
  component: SiteIconEditModal,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <SiteIconEditModal {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
