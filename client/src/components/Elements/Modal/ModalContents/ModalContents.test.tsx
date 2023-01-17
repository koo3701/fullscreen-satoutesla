import { render, screen } from '@testing-library/react';

import { ModalContents } from '@/components/Elements/Modal/ModalContents';

describe('components/Elements/Modal/ModalContents', () => {
  test('Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<ModalContents>{randomText}</ModalContents>);
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });
});
