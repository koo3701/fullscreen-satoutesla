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
      className={clsx('rounded-full bg-black hover:cursor-pointer', className)}
      onClick={handleClick}
    >
      <MdStar size={50} color="white" />
    </button>
  );
};
