import { FC, forwardRef } from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = {
  content?:any;
  className?: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = forwardRef(({ className = '',content, onClick = () => {} }, ref) => {
  return (
    <button className={classnames(styles.button, className)} onClick={onClick}>
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
