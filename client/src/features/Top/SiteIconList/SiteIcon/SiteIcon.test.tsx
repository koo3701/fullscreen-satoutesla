import { render, screen } from '@testing-library/react';

import { SiteIcon } from '@/features/Top/SiteIconList/SiteIcon';

describe('features/Top/SiteIconList/SiteIcon', () => {
  test('Text', () => {
    render(<SiteIcon />);
    expect(screen.getByText('SiteIcon')).toBeInTheDocument();
  });
});
