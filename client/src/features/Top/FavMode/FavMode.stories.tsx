import { MemoryRouter } from 'react-router-dom';

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
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <FavMode {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
