import { render, screen } from '@testing-library/react';

import { TextArea } from '@/components/Form/TextArea';

describe('components/Form/TextArea', () => {
  test('Label', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<TextArea label={randomText} />);
    expect(screen.getByText(randomText)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('Required', () => {
    render(<TextArea label="" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('Error', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<TextArea label="" error={{ type: 'min', message: randomText }} />);
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });
});
