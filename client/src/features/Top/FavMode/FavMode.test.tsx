import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FavMode } from '@/features/Top/FavMode';

vi.mock('react-router-dom');

describe('features/Top/FavMode', () => {
  test('onClick', async () => {
    const reactRouterDom = await import('react-router-dom');

    const navigate = vi.fn();
    reactRouterDom.useNavigate = vi.fn().mockReturnValueOnce(navigate);

    render(<FavMode />);

    expect(reactRouterDom.useNavigate).toHaveBeenCalledOnce();

    await userEvent.click(screen.getByRole('button'));

    expect(navigate).toHaveBeenCalledOnce();
    expect(navigate).toHaveBeenCalledWith('/open', { state: true });
  });
});
