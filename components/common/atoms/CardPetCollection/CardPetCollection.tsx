import Image from 'next/image';
import { FC } from 'react';
import Button from '../Button';
import Icon from '../Icon';

import styles from './CardPetCollection.module.scss';

import gender_female from '/public/GenderIcon/gender-female.svg';
import gender_male from '/public/GenderIcon/gender-male.svg';

type CardPetCollectionType = {
  src: string;
  alt: string;
  animalName: string;
  area: string;
};

const CardPetCollection: FC<CardPetCollectionType> = ({ src = '', alt = '', animalName = '', area = '' }) => {
  return (
    <div className={styles.collectionContainer}>
      <div className={styles.collection_left}>
        <Image src={src} alt={alt} width={140} height={140} />
      </div>
      <div className={styles.collection_right}>
        <div className={styles.gender}>
          <div className={styles.animalName}>{animalName}</div>
          <Icon src={gender_male} alt={'genderIcon'} className={styles.icon} />
        </div>
        <div className={styles.area}>{area}</div>
      </div>
      <Button content={'x'} className={styles.deleteBtn} />
    </div>
  );
};

export default CardPetCollection;
