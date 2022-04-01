import { FC } from 'react';
import Image from 'next/image';

import styles from './PhotoArea.module.scss';

type topLayerProps = {
  src: string,
  alt: string,
}

const PhotoArea: FC <topLayerProps>= ({ src='', alt=''}) => {
  return (
    <>
      <div className={styles.photo_container}>
        <div className={styles.toplayer}>
          <Image src={src} alt={alt} layout="fill"/>
        </div>
        <div className={styles.baselayer_one}></div>
        <div className={styles.baselayer_two}></div>
      </div>
    </>
  );
};

export default PhotoArea;
