import { render, screen } from '@testing-library/react';

import { SiteIconEditModal } from '@/features/Top/SiteIconEditModal';
import { SiteListContext } from '@/features/Top/SiteListContext';
import { SitesType } from '@/features/Top/type';

describe('features/Top/SiteIconEditModal', () => {
  test('Add', () => {
    render(<SiteIconEditModal isOpen onClose={() => {}} />);

    expect(screen.getAllByText('Add').length).toBe(2);
    expect(screen.getAllByRole('textbox').length).toBe(2);
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('');
  });

  test('Edit', () => {
    const idText = (Math.random() + 1).toString(36).substring(7);
    const urlText = (Math.random() + 1).toString(36).substring(7);
    const titleText = (Math.random() + 1).toString(36).substring(7);

    const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
      [{ id: idText, url: urlText, title: titleText, order: 1 }],
      vi.fn(),
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SiteListContext.Provider value={value}>{children}</SiteListContext.Provider>
    );

    render(<SiteIconEditModal isOpen onClose={() => {}} siteId={idText} />, { wrapper });

    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox').length).toBe(2);
    expect(screen.getAllByRole('textbox')[0]).toHaveValue(urlText);
    expect(screen.getAllByRole('textbox')[1]).toHaveValue(titleText);
  });
});
