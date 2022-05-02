import { FC } from 'react';

import styles from './PetHospital.module.scss';

import Button from '../../components/common/atoms/Button';
import CardPetHospital from '../../components/common/atoms/CardPetHospital';
import LayoutForContent from '../../components/layouts/LayoutForContent';
import Icon from '../../components/common/atoms/Icon';

import locationIcon from '../../public/PetHospital/locationIcon.svg';
import phoneIcon from '../../public/PetHospital/PhoneIcon.svg'

const PetHospital: FC = () => {
  return (
    <LayoutForContent className={styles.PetHospital}>
      <div className={styles.hospitalArea}>
        <div>
          <Button content={'北部'} />
          <Button content={'中部'} />
          <Button content={'南部'} />
          <Button content={'東部'} />
        </div>
        <div>
          <span>*資訊僅供參考，建議先電話聯絡再前往。</span>
        </div>
      </div>
      <div className={styles.locationTitle}>
        <Icon src={locationIcon} />
        <span>台北市</span>
      </div>
      <div className={styles.locationCard}>
        <CardPetHospital />
      </div>
      <div className={styles.locationTitle}>
        <Icon src={locationIcon} />
        <span>新北市</span>
      </div>
    </LayoutForContent>
  );
};

export default PetHospital;
