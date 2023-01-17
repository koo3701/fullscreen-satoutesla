import { render, screen } from '@testing-library/react';

import { SiteIconAddButton } from '@/features/Top/SiteIconAddButton';

describe('features/Top/SiteIconAddButton', () => {
  test('using svg', () => {
    render(<SiteIconAddButton />);
    expect(screen.getByTitle('MdAddCircle')).toBeInTheDocument();
  });
});
