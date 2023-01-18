import React from 'react';

import { render, screen } from '@testing-library/react';

import { SiteIcon } from '@/features/Top/SiteIconList/SiteIcon';
import { SiteListContext } from '@/features/Top/SiteListContext';
import { SitesType } from '@/features/Top/type';

vi.mock('@dnd-kit/sortable');
vi.mock('use-long-press');

describe('features/Top/SiteIconList/SiteIcon', () => {
  test('call useLongPress', async () => {
    const Sortable = await import('@dnd-kit/sortable');
    Sortable.useSortable = vi.fn().mockReturnValue({
      attributes: {},
      listeners: {},
      setNodeRef: null,
      transform: '',
      transition: '',
      isDragging: false,
    });

    const useLongPress = await import('use-long-press');

    type ULPType = typeof useLongPress.useLongPress<Element, () => void, unknown>;
    type ULPRType = ReturnType<ULPType>;
    type ULPRRType = ReturnType<ULPRType>;

    const eventMock = {
      onMouseDown: vi.fn(),
      onMouseLeave: vi.fn(),
      onMouseMove: vi.fn(),
      onMouseUp: vi.fn(),
      onTouchStart: vi.fn(),
      onTouchMove: vi.fn(),
      onTouchEnd: vi.fn(),
    } satisfies ReturnType<ReturnType<ULPType>>;

    const longPressListener = vi.fn<[unknown], ULPRRType>().mockReturnValue(eventMock);
    const uLP = vi.fn<Parameters<ULPType>, ULPRType>().mockReturnValue(longPressListener);
    // @ts-ignore
    useLongPress.useLongPress = uLP;

    const idText = (Math.random() + 1).toString(36).substring(7);
    const urlText = `https://example.com/${(Math.random() + 1).toString(36).substring(7)}`;
    const titleText = (Math.random() + 1).toString(36).substring(7);

    const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
      [{ id: idText, url: urlText, title: titleText, order: 1 }],
      vi.fn(),
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SiteListContext.Provider value={value}>{children}</SiteListContext.Provider>
    );

    const handleLongPress = vi.fn();
    render(<SiteIcon siteId={idText} onLongPress={handleLongPress} />, { wrapper });
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
        urlText
      )}&size=128`
    );
    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByTestId('siteicon')).toHaveClass('z-auto', 'opacity-100', 'touch-auto');

    expect(uLP).toHaveBeenCalledOnce();
    if (!uLP.mock.calls[0][0]) throw new Error();
    uLP.mock.calls[0][0]();

    expect(handleLongPress).toHaveBeenCalledOnce();
    expect(handleLongPress).toHaveBeenCalledWith(idText);

    const options = uLP.mock.calls[0][1];
    expect(options?.threshold).toBe(750);
    expect(options?.cancelOnMovement).toBe(true);
    if (options?.onCancel === undefined) throw new Error();
    const current = window.location.href;
    // @ts-ignore
    options?.onCancel(undefined, {
      reason: useLongPress.LongPressEventReason.CANCELED_BY_MOVEMENT,
    });
    expect(window.location.href).toBe(current);
    // @ts-ignore
    options?.onCancel(undefined, { reason: useLongPress.LongPressEventReason.CANCELED_BY_TIMEOUT });
    expect(window.location.href).toBe(urlText);
  });

  test('invalid siteId', async () => {
    const idText = (Math.random() + 1).toString(36).substring(7);
    const urlText = `https://example.com/${(Math.random() + 1).toString(36).substring(7)}`;
    const titleText = (Math.random() + 1).toString(36).substring(7);

    const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
      [{ id: `not${idText}`, url: urlText, title: titleText, order: 1 }],
      vi.fn(),
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SiteListContext.Provider value={value}>{children}</SiteListContext.Provider>
    );

    const handleLongPress = vi.fn();
    render(<SiteIcon siteId={idText} onLongPress={handleLongPress} />, { wrapper });
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByText(titleText)).not.toBeInTheDocument();
  });

  test('isDragging = true', async () => {
    const Sortable = await import('@dnd-kit/sortable');
    Sortable.useSortable = vi.fn().mockReturnValue({
      attributes: {},
      listeners: {},
      setNodeRef: null,
      transform: '',
      transition: '',
      isDragging: true,
    });

    const idText = (Math.random() + 1).toString(36).substring(7);
    const urlText = `https://example.com/${(Math.random() + 1).toString(36).substring(7)}`;
    const titleText = (Math.random() + 1).toString(36).substring(7);

    const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
      [{ id: idText, url: urlText, title: titleText, order: 1 }],
      vi.fn(),
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SiteListContext.Provider value={value}>{children}</SiteListContext.Provider>
    );

    const handleLongPress = vi.fn();
    render(<SiteIcon siteId={idText} onLongPress={handleLongPress} />, { wrapper });
    expect(screen.getByTestId('siteicon')).toHaveClass('z-50', 'opacity-30', 'touch-none');
  });
});
