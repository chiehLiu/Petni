import { FC } from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = {
  content: any;
  className?: string;
  onMouseEnter:() => void;
  onMouseLeave:() => void;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ className = '', content = '', onClick = () => {}, onMouseEnter = () => {}, onMouseLeave = () => {} }) => {
  return (
    <button
      className={classnames( styles.button, )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
    </button>
  );
};

export default Button;