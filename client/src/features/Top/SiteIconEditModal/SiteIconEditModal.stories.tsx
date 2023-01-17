import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { defaultSiteList } from '@/features/Top/defaultSiteList';
import { SiteIconEditModal } from '@/features/Top/SiteIconEditModal';
import { SiteListContext } from '@/features/Top/SiteListContext';
import { SitesType } from '@/features/Top/type';

type T = typeof SiteIconEditModal;

const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
  defaultSiteList,
  () => console.log('setSiteList'),
];

/**
 * @private
 */
export default {
  title: 'features/Top/SiteIconEditModal',
  component: SiteIconEditModal,
  args: { isOpen: true },
  decorators: [
    (Story) => (
      <SiteListContext.Provider value={value}>
        <Story />
      </SiteListContext.Provider>
    ),
  ],
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <SiteIconEditModal {...args} />;

/**
 * @private
 */
export const Add = Template.bind({});
Add.args = {};

/**
 * @private
 */
export const Edit = Template.bind({});
Edit.args = { siteId: value[0][0].id };
