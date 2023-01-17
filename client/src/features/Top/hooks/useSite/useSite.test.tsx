import { cleanup, renderHook } from '@testing-library/react';
import { expect, test } from 'vitest';

import { useSite } from '@/features/Top/hooks/useSite';
import { SiteListContext } from '@/features/Top/SiteListContext';
import { SitesType } from '@/features/Top/type';

describe('hooks/useSite', () => {
  beforeEach(() => {
    cleanup();
  });

  test('return text', async () => {
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

    const { result } = renderHook(() => useSite(idText), { wrapper });

    expect(result.current?.id).toBe(idText);
    expect(result.current?.url).toBe(urlText);
    expect(result.current?.title).toBe(titleText);
  });
});
