import { FC } from 'react';

import styles from './PhotoArea.module.scss';

const PhotoArea: FC = () => {
  return (
    <>
      <div className={styles.photo_container}>
        <div className={styles.toplayer}></div>
        <div className={styles.baselayer_one}></div>
        <div className={styles.baselayer_two}></div>
      </div>
    </>
  );
};

export default PhotoArea;
