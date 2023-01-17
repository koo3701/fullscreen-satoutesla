import { render, screen } from '@testing-library/react';

import { ModalActions } from '@/components/Elements/Modal/ModalActions';

describe('components/Elements/Modal/ModalActions', () => {
  test('Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<ModalActions>{randomText}</ModalActions>);
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });
});
