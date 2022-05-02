import { FC } from 'react';

import Header from '../../common/molecules/Header';
import classnames from 'classnames';

import styles from './LayoutForContent.module.scss';

type layoutProps = {
  children: any;
  className?: string;
};

const LayoutForContent: FC<layoutProps> = ({children, className}) => {
  return (
    <>
      <Header />
      <main className={classnames(styles.layoutForContent, className)}>{children}</main>
    </>
  );
};

export default LayoutForContent;
