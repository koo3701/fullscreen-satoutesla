import { cleanup, renderHook } from '@testing-library/react';
import { expect, test } from 'vitest';

import { useSite } from '@/hooks/useSite';

describe('hooks/useSite', () => {
  beforeEach(() => {
    cleanup();
  });

  test('return text', async () => {
    const { result } = renderHook(() => useSite());

    expect(result.current).toBe('useSite');
  });
});
