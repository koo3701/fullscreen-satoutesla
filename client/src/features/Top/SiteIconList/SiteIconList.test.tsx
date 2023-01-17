import React from 'react';

import { render, screen } from '@testing-library/react';

import { defaultSiteList } from '@/features/Top/defaultSiteList';
import { SiteIconList } from '@/features/Top/SiteIconList';
import { SiteListContext } from '@/features/Top/SiteListContext';
import { SitesType } from '@/features/Top/type';

vi.mock('@dnd-kit/core');

describe('features/Top/SiteIconList', () => {
  test('Single Icon', async () => {
    const Core = await import('@dnd-kit/core');
    // @ts-ignore
    // eslint-disable-next-line react/function-component-definition
    Core.DndContext = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

    const idText = (Math.random() + 1).toString(36).substring(7);
    const urlText = (Math.random() + 1).toString(36).substring(7);
    const titleText = (Math.random() + 1).toString(36).substring(7);

    const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
      [{ id: idText, url: urlText, title: titleText, order: 1 }],
      vi.fn(),
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SiteListContext.Provider value={value}>{children}</SiteListContext.Provider>
    );

    render(<SiteIconList onLongPress={() => {}} />, { wrapper });

    expect(screen.getAllByRole('img').length).toBe(1);
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
        urlText
      )}&size=128`
    );
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });

  test('Multiple Icons', async () => {
    const Core = await import('@dnd-kit/core');
    // @ts-ignore
    // eslint-disable-next-line react/function-component-definition
    Core.DndContext = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

    const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
      defaultSiteList,
      vi.fn(),
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SiteListContext.Provider value={value}>{children}</SiteListContext.Provider>
    );

    render(<SiteIconList onLongPress={() => {}} />, { wrapper });

    expect(screen.getAllByRole('img').length).toBe(defaultSiteList.length);
  });
});
