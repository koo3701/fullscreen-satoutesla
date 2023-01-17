import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { defaultSiteList } from '@/features/Top/defaultSiteList';
import { SiteIconList } from '@/features/Top/SiteIconList';
import { SiteListContext } from '@/features/Top/SiteListContext';
import { SitesType } from '@/features/Top/type';

type T = typeof SiteIconList;

const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
  defaultSiteList,
  () => console.log('setSiteList'),
];

/**
 * @private
 */
export default {
  title: 'features/Top/SiteIconList',
  component: SiteIconList,
  args: {},
  decorators: [
    (Story) => (
      <SiteListContext.Provider value={value}>
        <Story />
      </SiteListContext.Provider>
    ),
  ],
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <SiteIconList {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};
