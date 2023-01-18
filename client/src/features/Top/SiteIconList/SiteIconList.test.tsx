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

    type OnDragEndType = (event: {
      active: { id: string | number };
      over: { id: string | number };
    }) => SitesType;
    let handleDragEnd: OnDragEndType = () => defaultSiteList;
    // @ts-ignore
    // eslint-disable-next-line react/function-component-definition
    Core.DndContext = ({
      onDragEnd,
      children,
    }: {
      onDragEnd: OnDragEndType;
      children: React.ReactNode;
    }) => {
      handleDragEnd = onDragEnd;
      return <div>{children}</div>;
    };

    const setSites = vi.fn<[(sites: SitesType) => SitesType], void>();
    const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
      defaultSiteList,
      // @ts-ignore
      setSites,
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SiteListContext.Provider value={value}>{children}</SiteListContext.Provider>
    );

    render(<SiteIconList onLongPress={() => {}} />, { wrapper });

    expect(screen.getAllByRole('img').length).toBe(defaultSiteList.length);

    handleDragEnd({ active: { id: 2 }, over: { id: 4 } });

    const correct = [value[0][0], value[0][2], value[0][3], value[0][1], ...value[0].slice(4)].map(
      (site, i) => ({ ...site, order: i })
    );
    expect(setSites).toHaveBeenCalledOnce();
    expect(setSites.mock.calls[0][0](value[0])).toStrictEqual(correct);
  });

  test('Invalid Id', async () => {
    const Core = await import('@dnd-kit/core');

    type OnDragEndType = (event: {
      active: { id: string | number };
      over: { id: string | number };
    }) => SitesType;
    let handleDragEnd: OnDragEndType = () => defaultSiteList;
    // @ts-ignore
    // eslint-disable-next-line react/function-component-definition
    Core.DndContext = ({
      onDragEnd,
      children,
    }: {
      onDragEnd: OnDragEndType;
      children: React.ReactNode;
    }) => {
      handleDragEnd = onDragEnd;
      return <div>{children}</div>;
    };

    const setSites = vi.fn<[(sites: SitesType) => SitesType], void>();
    const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
      defaultSiteList,
      // @ts-ignore
      setSites,
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SiteListContext.Provider value={value}>{children}</SiteListContext.Provider>
    );

    render(<SiteIconList onLongPress={() => {}} />, { wrapper });

    handleDragEnd({ active: { id: 2 }, over: { id: 'notexistid' } });

    const correct = value[0];
    expect(setSites).toHaveBeenCalledOnce();
    expect(setSites.mock.calls[0][0](value[0])).toStrictEqual(correct);
  });
});
