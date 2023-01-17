import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Modal } from '@/components/Elements/Modal';

describe('components/Elements/Modal', () => {
  test('Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(
      <Modal isOpen onClose={() => {}}>
        {randomText}
      </Modal>
    );
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });

  test('isOpen = false', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(
      <Modal isOpen={false} onClose={() => {}}>
        {randomText}
      </Modal>
    );
    expect(screen.queryByText(randomText)).not.toBeInTheDocument();
  });
});
