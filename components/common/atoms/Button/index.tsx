import { FC } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

type ButtonProps = {
  content: string;
  className?: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ className = '', content = '', onClick = () => {} }) => {
  return (
    <button
      className={classnames( styles.button, )}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;