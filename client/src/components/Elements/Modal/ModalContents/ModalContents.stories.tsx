import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { ModalContents } from '@/components/Elements/Modal/ModalContents';

type T = typeof ModalContents;

/**
 * @private
 */
export default {
  title: 'components/Elements/Modal/ModalContents',
  component: ModalContents,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <ModalContents {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
