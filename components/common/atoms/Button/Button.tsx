import { FC } from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = {
  content: any;
  className?: string;
  id?: string;
  onMouseEnter?:() => void;
  onMouseLeave?:() => void;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ className = '', content = '', onClick = () => {}, onMouseEnter = () => {}, onMouseLeave = () => {}, id = ''}) => {
  return (
    <button
      className={classnames( styles.button, className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id={id}
    >
      {content}
    </button>
  );
};

export default Button;