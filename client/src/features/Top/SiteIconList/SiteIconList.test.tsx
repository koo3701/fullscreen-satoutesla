import { render, screen } from '@testing-library/react';

import { SiteIconList } from '@/features/Top/SiteIconList';

describe('features/Top/SiteIconList', () => {
  test('Text', () => {
    render(<SiteIconList />);
    expect(screen.getByText('SiteIconList')).toBeInTheDocument();
  });
});
