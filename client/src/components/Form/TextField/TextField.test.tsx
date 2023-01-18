import { render, screen } from '@testing-library/react';

import { allowTypeList, TextField } from '@/components/Form/TextField';

describe('components/Form/TextField', () => {
  test('Label', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(<TextField type="text" label={randomText} />);
    expect(screen.getByText(randomText)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('Required', () => {
    render(<TextField type="text" label="" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test.each(allowTypeList)('Type %i', (type) => {
    render(<TextField type={type} label="" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', type);
  });
});
