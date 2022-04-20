import Image from 'next/image';
import { FC } from 'react';

import enterPageAnimate from '../../../../public/EnterPageAnimate/enterPageAnimate.gif';

import styles from './EnterPageAnimate.module.scss';

const EnterPageAnimate: FC = () => {
  return (
    <>
      <div className={styles.animateArea}>
        <Image src={enterPageAnimate} alt="enterPageAnimate" />
      </div>
      <div className={styles.authorArea}>PetNi © Code: Chieh Liu / Design: K.T</div>
    </>
  );
};

export default EnterPageAnimate;
