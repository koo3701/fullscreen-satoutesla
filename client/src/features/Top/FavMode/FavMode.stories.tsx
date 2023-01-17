import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { FavMode } from '@/features/Top/FavMode';

type T = typeof FavMode;

/**
 * @private
 */
export default {
  title: 'features/Top/FavMode',
  component: FavMode,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <FavMode {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
