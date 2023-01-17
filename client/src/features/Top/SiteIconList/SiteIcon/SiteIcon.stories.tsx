import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { defaultSiteList } from '@/features/Top/defaultSiteList';
import { SiteIcon } from '@/features/Top/SiteIconList/SiteIcon';
import { SiteListContext } from '@/features/Top/SiteListContext';
import { SitesType } from '@/features/Top/type';

type T = typeof SiteIcon;

const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
  [
    ...defaultSiteList,
    { id: 7, url: '', title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', order: 7 },
  ],
  () => console.log('setSiteList'),
];

/**
 * @private
 */
export default {
  title: 'features/Top/SiteIconList/SiteIcon',
  component: SiteIcon,
  args: { siteId: value[0][0].id },
  decorators: [
    (Story) => (
      <SiteListContext.Provider value={value}>
        <Story />
      </SiteListContext.Provider>
    ),
  ],
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <SiteIcon {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

/**
 * @private
 */
export const Orverflow = Template.bind({});
Orverflow.args = { siteId: value[0][value[0].length - 1].id };
