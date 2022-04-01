import CardPet from '../../atoms/CardPet';

import styles from './OtherArea.module.scss';

import { FC } from 'react';

import CardPetImg_1 from '../../../../public/CardPetImg/CardPet-1.svg';
import CardPetImg_2 from '../../../../public/CardPetImg/CardPet-2.svg';
import CardPetImg_3 from '../../../../public/CardPetImg/CardPet-3.svg';

// CardPetImgAlt still need to refactor until working on the data fetching
const OtherArea: FC = () => {
  return (
    <>
      <div className={styles.CardPet_layout}>
        <CardPet src={CardPetImg_1} alt={CardPetImg_1} animalName={'157763'} area={'臺南市南區'} />
        <CardPet src={CardPetImg_2} alt={CardPetImg_2} animalName={'147593'} area={'台北市中正區'} />
        <CardPet src={CardPetImg_3} alt={CardPetImg_3} animalName={'135902'} area={'桃園市新屋區'} />
      </div>
    </>
  );
};

export default OtherArea;
