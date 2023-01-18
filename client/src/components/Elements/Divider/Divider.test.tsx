import { render, screen } from '@testing-library/react';

import { Divider } from '@/components/Elements/Divider';

describe('components/Elements/Divider', () => {
  test('Divide', () => {
    render(<Divider />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  test('Divide vertical', () => {
    render(<Divider vertical />);
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });
});
