import { render, screen } from '@testing-library/react';

import { ModalTitle } from '@/components/Elements/Modal/ModalTitle';

describe('components/Elements/Modal/ModalTitle', () => {
  test('Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<ModalTitle>{randomText}</ModalTitle>);
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });
});
