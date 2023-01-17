import { render, screen } from '@testing-library/react';

import { SiteIconEditModal } from '@/features/Top/SiteIconEditModal';

describe('features/Top/SiteIconEditModal', () => {
  test('Text', () => {
    render(<SiteIconEditModal />);
    expect(screen.getByText('SiteIconEditModal')).toBeInTheDocument();
  });
});
