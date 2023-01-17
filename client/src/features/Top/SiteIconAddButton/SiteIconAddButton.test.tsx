import { render, screen } from '@testing-library/react';

import { SiteIconAddButton } from '@/features/Top/SiteIconAddButton';

describe('features/Top/SiteIconAddButton', () => {
  test('Text', () => {
    render(<SiteIconAddButton />);
    expect(screen.getByText('SiteIconAddButton')).toBeInTheDocument();
  });
});
