import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { ModalActions } from '@/components/Elements/Modal/ModalActions';

type T = typeof ModalActions;

/**
 * @private
 */
export default {
  title: 'components/Elements/Modal/ModalActions',
  component: ModalActions,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <ModalActions {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
