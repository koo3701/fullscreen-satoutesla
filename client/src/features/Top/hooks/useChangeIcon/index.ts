import { useState, ComponentProps } from 'react';

export const useChangeIcon: (
  initialTitle?: string,
  initialUrl?: string
) => [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  React.ChangeEventHandler<HTMLInputElement>,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  React.ChangeEventHandler<HTMLInputElement>
] = (initialTitle = '', initialUrl = '') => {
  const [title, setTitle] = useState(initialTitle);
  const [url, setUrl] = useState(initialUrl);

  const handleChangeTitle: ComponentProps<'input'>['onChange'] = (event) =>
    setTitle(event.target.value);

  const handleChangeUrl: ComponentProps<'input'>['onChange'] = (event) =>
    setUrl(event.target.value);

  return [title, setTitle, handleChangeTitle, url, setUrl, handleChangeUrl];
};
