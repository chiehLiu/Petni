import Image from 'next/image';
import Header from '../../components/common/molecules/Header';
import Button from '../../components/common/atoms/Button';
import Icon from '../../components/common/atoms/Icon';

import styles from './PetDetailPage.module.scss';

import petAviator from '../../public/PetDetailPage/petAviator.svg';
import closeBtn from '../../public/PetDetailPage/closeBtn.svg';
import heart from '../../public/PetDetailPage/Heart.svg';
import bagImg from '../../public/PetDetailPage/bagImg.svg';
import palette from '../../public/PetDetailPage/palette.svg';
import genderFemale from '../../public/GenderIcon/gender-female.svg';

const PetDetailPage = () => {
  return (
    <>
      <Header />
      <div className={styles.petDetailPageContent}>
        <Button
          className={styles.closePetDetailPageBtn}
          content={<Icon src={closeBtn} alt="closePetDetailPageBtn"></Icon>}
        />
        <div className={styles.petAviator}>
          <Image src={petAviator} alt="petAviator" className={styles.petImg} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.petInfo}>
          <div className={styles.petName}>
            <div className={styles.nameCard}>
              <span className={styles.name}>238721</span>
              <span className={styles.address}>桃園市新屋區</span>
            </div>
            <div>
              <Button className={styles.addToFavorite} content={<Icon src={heart} alt="Heart"></Icon>} />
            </div>
          </div>
          <div className={styles.follower}>
            <div>
              <span className={styles.seriesNumber}>W09C0429-03</span>
              <span className={styles.seriesDate}>2020.08.28</span>
            </div>
            <div>
              <span className={styles.seriesFollower}>130</span>
              <span className={styles.seriesLabel}>followers</span>
            </div>
          </div>
          <div className={styles.petInfoCard}>
            <div>
              <Button
                className={styles.bagImg}
                content={<Icon src={bagImg} alt="bagImg"></Icon>}
              />
              <span>求包養</span>
            </div>
            <div>
              <Button
                className={styles.genderFemale}
                content={<Icon src={genderFemale} alt="genderFemale"></Icon>}
              />
              <span>女生</span>
            </div>
            <div>
              <Button
                className={styles.palette}
                content={<Icon src={palette} alt="palette"></Icon>}
              />
              <span>黑白色</span>
            </div>
          </div>
          <div className={styles.contactInfo}></div>
        </div>
      </div>
    </>
  );
};

export default PetDetailPage;
