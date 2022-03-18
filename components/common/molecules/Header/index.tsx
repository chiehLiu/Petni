import Image from 'next/image';
import { FC } from 'react';

import logo from '../../../../public/Header/header_logo.svg';
import home from '../../../../public/Header/home.svg';
import favorite from '../../../../public/Header/favorites.svg';
import style from '../../../../public/Header/style.svg';
import rescue from '../../../../public/Header/rescue.svg';
import hospital from '../../../../public/Header/hospital.svg';


import styles from './index.module.css';

const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>
        <Image src={logo} alt="banner_logo" />
      </div>
      <div className={styles.navigator}>
        <div>
          <Image src={home} alt="Home_btn"/>
        </div>
        <div>123
          <Image src={favorite} alt="favorites_btn"/>  
        </div>
        <div>
          <Image src={style} alt="style_btn"/>  
        </div>
        <div>
        <Image src={rescue} alt="rescue_btn"/> 
        </div>
        <div>
        <Image src={hospital} alt="hospital_btn"/> 
        </div>
      </div>
    </div>
  );
};

export default Header;
