import { FC } from 'react';
import Image from 'next/image';
import Icon from '../Icon';

import styles from './CardPet.module.scss';

import gender_female from '../../../../public/GenderIcon/gender-female.svg';
import gender_male from '../../../../public/GenderIcon/gender-male.svg';

type CardPetImgType = {
  src: string;
  alt: string;
  animalName: string;
  area: string;
};

const CardPet: FC<CardPetImgType> = ({ src = '', alt = '', animalName = '', area = '' }) => {
  return (
    <div className={styles.CardPetContainer}>
      <div className={styles.CardPet_left}>
        <Image src={src} alt={alt} />
      </div>
      <div className={styles.CardPet_right}>
        <div className={styles.gender}>
          <div className={styles.animalName}>{animalName}</div>
          <Icon src={gender_female} alt={'genderIcon'} className={styles.icon} />
        </div>
        <div className={styles.area}>{area}</div>
      </div>
    </div>
  );
};

export default CardPet;
