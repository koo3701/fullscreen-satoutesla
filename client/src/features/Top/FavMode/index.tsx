import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { MdStar } from 'react-icons/md';

/**
 * @package
 */
export type FavModePropsType = {
  className?: string;
};
/**
 * @package
 */
export const FavMode = ({ className }: FavModePropsType) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/open', { state: true });
  };

  return (
    <button
      type="button"
      className={clsx('rounded-full bg-black p-2 hover:cursor-pointer', className)}
      onClick={handleClick}
    >
      <MdStar size={35} color="white" />
    </button>
  );
};
