import { FC } from 'react';
import classnames from 'classnames';

import styles from './SearchAreaTitle.module.scss';

type titleProps = {
  className?: string;
};

const SearchAreaTitle: FC<titleProps> = (props) => {
  return (
    <span className={classnames(styles.title)}>
      {props.children}
    </span>
  )
}

export default SearchAreaTitle;