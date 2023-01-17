import { render, screen } from '@testing-library/react';

import { FieldWrapper } from '@/components/Form/FieldWrapper';

describe('components/Form/FieldWrapper', () => {
  test('Text', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(
      <FieldWrapper htmlFor="id" label="">
        {randomText}
      </FieldWrapper>
    );
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });

  test('Label', () => {
    const randomText = (Math.random() + 1).toString(36).substring(7);

    render(
      <FieldWrapper htmlFor="id" label={randomText}>
        FieldWrapper
      </FieldWrapper>
    );
    expect(screen.getByText(randomText)).toBeInTheDocument();
  });

  test('Required', () => {
    render(
      <FieldWrapper htmlFor="id" label="" required>
        FieldWrapper
      </FieldWrapper>
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});
