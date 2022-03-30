import { FC } from 'react';
import Image from 'next/image';
import Icon from '../Icon';

import styles from './PetCard.module.scss';

import gender_female from '../../../../public/GenderIcon/gender-female.svg';
import gender_male from '../../../../public/GenderIcon/gender-male.svg';

type PetCardImgType = {
  src: string;
  alt: string;
  animalName: string;
  area: string;
};

const PetCard: FC<PetCardImgType> = ({ src = '', alt = '', animalName = '', area = '' }) => {
  return (
    <div className={styles.PetCardContainer}>
      <div className={styles.PetCard_left}>
        <Image src={src} alt={alt} />
      </div>
      <div className={styles.PetCard_right}>
        <div className="animalName">{animalName}</div>
        <div className="area">{area}</div>
      </div>
      <div className={styles.gender}>
        <Icon src={gender_female} alt={'genderIcon'} className={styles.icon} />
      </div>
    </div>
  );
};

export default PetCard;
