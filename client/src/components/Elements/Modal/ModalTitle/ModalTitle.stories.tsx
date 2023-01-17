import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { ModalTitle } from '@/components/Elements/Modal/ModalTitle';

type T = typeof ModalTitle;

/**
 * @private
 */
export default {
  title: 'components/Elements/Modal/ModalTitle',
  component: ModalTitle,
  args: {
    children: 'ModalTitle',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <ModalTitle {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
