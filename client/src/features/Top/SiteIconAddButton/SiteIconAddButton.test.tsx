import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SiteIconAddButton } from '@/features/Top/SiteIconAddButton';

describe('features/Top/SiteIconAddButton', () => {
  test('using svg', () => {
    render(<SiteIconAddButton onClick={() => {}} />);
    expect(screen.getByTitle('MdAddCircle')).toBeInTheDocument();
  });

  test('onClick', async () => {
    const handleClick = vi.fn();

    render(<SiteIconAddButton onClick={handleClick} />);
    expect(screen.getByTitle('MdAddCircle')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledOnce();
  });
});
