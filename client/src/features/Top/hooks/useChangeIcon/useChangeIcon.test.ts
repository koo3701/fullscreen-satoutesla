import { cleanup, renderHook, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';

import { useChangeIcon } from '@/features/Top/hooks/useChangeIcon';

describe('hooks/useChangeIcon', () => {
  beforeEach(() => {
    cleanup();
  });

  test('return text', async () => {
    const initialTitle = (Math.random() + 1).toString(36).substring(7);
    const initialUrl = (Math.random() + 1).toString(36).substring(7);

    const { result } = renderHook(() => useChangeIcon(initialTitle, initialUrl));

    expect(result.current[0]).toBe(initialTitle);
    expect(result.current[3]).toBe(initialUrl);
  });

  test('change text', async () => {
    const { result } = renderHook(() => useChangeIcon());

    expect(result.current[0]).toBe('');
    expect(result.current[3]).toBe('');

    const changeTitle = (Math.random() + 1).toString(36).substring(7);
    const changeUrl = (Math.random() + 1).toString(36).substring(7);

    // @ts-ignore
    result.current[2]({ target: { value: changeTitle } });
    // @ts-ignore
    result.current[5]({ target: { value: changeUrl } });

    await waitFor(() => expect(result.current[0]).toBe(changeTitle));
    expect(result.current[3]).toBe(changeUrl);
  });

  test('set text', async () => {
    const { result } = renderHook(() => useChangeIcon());

    const setTitle = (Math.random() + 1).toString(36).substring(7);
    const setUrl = (Math.random() + 1).toString(36).substring(7);

    result.current[1](setTitle);
    result.current[4](setUrl);

    await waitFor(() => expect(result.current[0]).toBe(setTitle));
    expect(result.current[3]).toBe(setUrl);
  });
});
