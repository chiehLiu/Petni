import { FC } from 'react';

import styles from './CardPetHospital.module.scss';

import phoneIcon from '../../../../public/PetHospital/PhoneIcon.svg';
import Icon from '../Icon';

const CardPetHospital: FC = () => {
  return (
    <div className={styles.hospitalCardContainer}>
      <div className="hospital_left">
        <div className="hospitalName">展望醫院</div>
        <div className="hospitalPhone">0222344494</div>
        <div className="hospitalAddress">台北市萬華區中華路2段2號</div>
      </div>
      <div className="hospital_right">
        <span>*疫情期間有開</span>
        <div className={styles.phoneBtn}>
          <Icon src={phoneIcon} />
        </div>
      </div>
    </div>
  );
};

export default CardPetHospital;
