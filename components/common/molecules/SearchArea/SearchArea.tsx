import SearchAreaTitle from '../../atoms/SearchAreaTitle/SearchAreaTitle';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon'

import gender_female from '../../../../public/GenderIcon/gender-female.svg';
import gender_male from '../../../../public/GenderIcon/gender-male.svg';

import catImg from '../../../../public/AnimalIcon/catBlack.svg';
import catWhite from '../../../../public/AnimalIcon/catWhite.svg';
import dogImg from '../../../../public/AnimalIcon/dogBlack.svg';
import dogWhite from '../../../../public/AnimalIcon/dogWhite.svg';

import styles from './SearchArea.module.scss';
import { useState } from 'react';

const SearchArea = () => {

  const [isHover, setIsHovered] = useState(false);
  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  }
2
  return (
    <div className={styles.SearchArea}>
      <div>
        <SearchAreaTitle>我想尋找</SearchAreaTitle>
      </div>
      <div className={styles.catOrDog}>
        <Button content={<Icon src={isHover ? catWhite : catImg} alt={catImg}/>}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
        <Button content={<Icon src={isHover ? dogWhite: dogImg} alt={dogImg} />} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
        <Button content={'不拘'} />
      </div>
      <div>
        <SearchAreaTitle>性別</SearchAreaTitle>
      </div>
      <div className={styles.gender}>
        <Button content={<Icon src={gender_male} alt={gender_male}/>} />
        <Button content={<Icon src={gender_female} alt={gender_female}/>} />
        <Button content={'不拘'}/>
      </div>
      <div>
        <SearchAreaTitle>年齡</SearchAreaTitle>
      </div>
      <div className={styles.age}>
        <Button content={'幼齡'} />
        <Button content={'成年'} />
        <Button content={'不拘'} />
      </div>
      <div>
        <SearchAreaTitle>顏色</SearchAreaTitle>
      </div>
      <div className={styles.color}>
        <Button content={'黑貓'} />
        <Button content={'白貓'} />
        <Button content={'乳牛貓'} />
        <Button content={'橘貓'} />
        <Button content={'虎斑貓'} />
        <Button content={'三色貓'} />
        <Button content={'玳瑁貓'} />
        <Button content={'不拘'} />
      </div>
      <div className={styles.toggleBtn}>
        <SearchAreaTitle>搜尋附近</SearchAreaTitle>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.toggleBtn}>
        <SearchAreaTitle>互動音效</SearchAreaTitle>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.submit}>
        <Button content={'套用'} />
      </div>
    </div>
  );
};

export default SearchArea;
