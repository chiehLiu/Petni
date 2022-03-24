import PetCard from '../../atoms/PetCard/';

import styles from './OtherArea.module.scss';

import { FC } from 'react';

import PetCardImg_1 from '../../../../public/PetCardImg/PetCard-1.svg';
import PetCardImg_2 from '../../../../public/PetCardImg/PetCard-2.svg';
import PetCardImg_3 from '../../../../public/PetCardImg/PetCard-3.svg';

// PetCardImgAlt still need to refactor until working on the data fetching
const OtherArea: FC = () => {
  return (
    <>
      <div className={styles.petCard_layout}>
        <PetCard src={PetCardImg_1} alt={PetCardImg_1} animalName={'157763'} area={'臺南市南區'} />
        <PetCard src={PetCardImg_2} alt={PetCardImg_2} animalName={'147593'} area={'台北市中正區'} />
        <PetCard src={PetCardImg_3} alt={PetCardImg_3} animalName={'135902'} area={'桃園市新屋區'} />
      </div>
    </>
  );
};

export default OtherArea;
