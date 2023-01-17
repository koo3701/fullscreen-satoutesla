import { cleanup, renderHook } from '@testing-library/react';
import { expect, test } from 'vitest';

import { useChangeIcon } from '@/hooks/useChangeIcon';

describe('hooks/useChangeIcon', () => {
  beforeEach(() => {
    cleanup();
  });

  test('return text', async () => {
    const { result } = renderHook(() => useChangeIcon());

    expect(result.current).toBe('useChangeIcon');
  });
});
