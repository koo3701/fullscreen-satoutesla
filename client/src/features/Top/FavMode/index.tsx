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
    <div className={clsx('rounded-full bg-black', className)}>
      <MdStar size={40} color="white" onClick={handleClick} />
    </div>
  );
};
