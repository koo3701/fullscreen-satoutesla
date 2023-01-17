import { render, screen } from '@testing-library/react';

import { FavMode } from '@/features/Top/FavMode';

describe('features/Top/FavMode', () => {
  test('Text', () => {
    render(<FavMode />);
    expect(screen.getByText('FavMode')).toBeInTheDocument();
  });
});
