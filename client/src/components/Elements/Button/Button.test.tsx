import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '@/components/Elements/Button';

describe('components/Elements/Button', () => {
  test('Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<Button>{randomText}</Button>);
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });

  test('Type Button', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  test('Type Submit', () => {
    render(<Button submit>Button</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test('onClick', async () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Button</Button>);

    await userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledOnce();
  });
});
