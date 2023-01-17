import { useLocation } from 'react-router-dom';

export const Open = () => {
  const location = useLocation();
  const uri = new URL(window.location.href);
  const redirectUrl = `https://www.youtube.com/redirect?q=${uri.protocol}//${uri.host}/`;

  if (location.state !== true) window.location.replace(redirectUrl);

  return location.state === true ? (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="text-center">
        <h2>This is Bookmark Mode!</h2>
        <h5>Add This Page to Your Tesla Browser Bookmark!</h5>
        <p>
          or{' '}
          <a className="font-bold text-blue-800 underline" href={redirectUrl}>
            Open Fullscreen Mode
          </a>
        </p>
      </div>
    </div>
  ) : null;
};
