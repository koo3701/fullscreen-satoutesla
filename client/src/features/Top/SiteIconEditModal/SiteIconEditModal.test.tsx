import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SiteIconEditModal } from '@/features/Top/SiteIconEditModal';
import { SiteListContext } from '@/features/Top/SiteListContext';
import { SitesType } from '@/features/Top/type';

vi.mock('@/features/Top/hooks/useChangeIcon');
vi.mock('uuid');

describe('features/Top/SiteIconEditModal', () => {
  test('Add', async () => {
    const idText = (Math.random() + 1).toString(36).substring(7);
    const urlText = (Math.random() + 1).toString(36).substring(7);
    const titleText = (Math.random() + 1).toString(36).substring(7);

    const setTitle = vi.fn();
    const changeTitle = vi.fn();
    const setUrl = vi.fn();
    const changeUrl = vi.fn();

    const useChangeIcon = await import('@/features/Top/hooks/useChangeIcon');
    // @ts-ignore
    useChangeIcon.useChangeIcon = vi
      .fn()
      .mockReturnValue(['', setTitle, changeTitle, '', setUrl, changeUrl]);

    const uuidv4 = (Math.random() + 1).toString(36).substring(7);
    const uuid = await import('uuid');
    uuid.v4 = vi.fn().mockReturnValue(uuidv4);

    const setSites = vi.fn();
    const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
      [{ id: idText, url: urlText, title: titleText, order: 1 }],
      setSites,
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SiteListContext.Provider value={value}>{children}</SiteListContext.Provider>
    );

    const handleClose = vi.fn();

    render(<SiteIconEditModal isOpen onClose={handleClose} />, { wrapper });

    expect(screen.getAllByText('Add').length).toBe(2);
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
    expect(screen.getAllByRole('textbox').length).toBe(2);
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('');

    await userEvent.keyboard('{Escape}');

    expect(setTitle).toHaveBeenCalledOnce();
    expect(setTitle).toHaveBeenCalledWith('');
    expect(setUrl).toHaveBeenCalledOnce();
    expect(setUrl).toHaveBeenCalledWith('');
    expect(handleClose).toHaveBeenCalledOnce();

    await userEvent.click(screen.getByText('Cancel'));

    expect(setTitle).toHaveBeenCalledTimes(2);
    expect(setTitle).toHaveBeenCalledWith('');
    expect(setUrl).toHaveBeenCalledTimes(2);
    expect(setUrl).toHaveBeenCalledWith('');
    expect(handleClose).toHaveBeenCalledTimes(2);

    await userEvent.click(screen.getAllByText('Add')[1]);

    expect(setSites).toHaveBeenCalledOnce();
    expect(setSites).toHaveBeenCalledWith([
      ...value[0],
      { id: uuidv4, url: '', title: '', order: value[0].length },
    ]);
    expect(handleClose).toHaveBeenCalledTimes(3);
  });

  test('Edit', async () => {
    const idText = (Math.random() + 1).toString(36).substring(7);
    const defaultUrlText = (Math.random() + 1).toString(36).substring(7);
    const defaultTitleText = (Math.random() + 1).toString(36).substring(7);
    const urlText = (Math.random() + 1).toString(36).substring(7);
    const titleText = (Math.random() + 1).toString(36).substring(7);

    const setTitle = vi.fn();
    const changeTitle = vi.fn();
    const setUrl = vi.fn();
    const changeUrl = vi.fn();

    const useChangeIcon = await import('@/features/Top/hooks/useChangeIcon');
    // @ts-ignore
    useChangeIcon.useChangeIcon = vi
      .fn()
      .mockReturnValue([titleText, setTitle, changeTitle, urlText, setUrl, changeUrl]);

    const setSites = vi.fn();
    const value: [SitesType, React.Dispatch<React.SetStateAction<SitesType>>] = [
      [
        { id: idText, url: defaultUrlText, title: defaultTitleText, order: 1 },
        { id: 1, url: 'https://www.google.com/', title: 'Google', order: 1 },
      ],
      setSites,
    ];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SiteListContext.Provider value={value}>{children}</SiteListContext.Provider>
    );

    const handleClose = vi.fn();

    render(<SiteIconEditModal isOpen onClose={handleClose} siteId={idText} />, { wrapper });

    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox').length).toBe(2);
    expect(screen.getAllByRole('textbox')[0]).toHaveValue(urlText);
    expect(screen.getAllByRole('textbox')[1]).toHaveValue(titleText);

    await userEvent.keyboard('{Escape}');

    expect(setTitle).toHaveBeenCalledOnce();
    expect(setTitle).toHaveBeenCalledWith(defaultTitleText);
    expect(setUrl).toHaveBeenCalledOnce();
    expect(setUrl).toHaveBeenCalledWith(defaultUrlText);
    expect(handleClose).toHaveBeenCalledOnce();

    await userEvent.click(screen.getByText('Cancel'));

    expect(setTitle).toHaveBeenCalledTimes(2);
    expect(setTitle).toHaveBeenCalledWith(defaultTitleText);
    expect(setUrl).toHaveBeenCalledTimes(2);
    expect(setUrl).toHaveBeenCalledWith(defaultUrlText);
    expect(handleClose).toHaveBeenCalledTimes(2);

    await userEvent.click(screen.getByText('Save'));

    expect(setSites).toHaveBeenCalledOnce();
    expect(setSites).toHaveBeenCalledWith([
      { id: value[0][0].id, url: urlText, title: titleText, order: value[0][0].order },
      value[0][1],
    ]);
    expect(handleClose).toHaveBeenCalledTimes(3);

    await userEvent.click(screen.getByText('Delete'));

    expect(setSites).toHaveBeenCalledTimes(2);
    expect(setSites).toHaveBeenCalledWith([value[0][1]]);
    expect(handleClose).toHaveBeenCalledTimes(4);
  });
});
