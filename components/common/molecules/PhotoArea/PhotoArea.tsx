import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './PhotoArea.module.scss';

type topLayerProps = {
  src: string;
  alt: string;
};

import detailBtn from '../../../../public/PhotoArea/detailBtn.svg';

const PhotoArea: FC<topLayerProps> = ({ src = '', alt = '' }) => {
  const toDetailPageHandler = () => {};

  return (
    <>
      <div className={styles.photo_container}>
        <div className={styles.topLayer}>
          <div className={styles.detailBtn}>
            <Link href="/PetDetail" passHref>
              <a>
                <Image src={detailBtn} alt={detailBtn} onClick={toDetailPageHandler} priority/>
              </a>
            </Link>
          </div>
          <Image src={src} alt={alt}/>
        </div>
        <div className={styles.baseLayer_one}></div>
        <div className={styles.baseLayer_two}></div>
      </div>
    </>
  );
};

export default PhotoArea;
