import Image from 'next/image';
import { FC } from 'react';

import logo from '../../../../public/Header/header_logo.svg';
import home from '../../../../public/Header/home.svg';
import favorite from '../../../../public/Header/favorites.svg';
import pavilion from '../../../../public/Header/pavilion.svg';
import rescue from '../../../../public/Header/rescue.svg';
import hospital from '../../../../public/Header/hospital.svg';

import styles from './Header.module.scss';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="banner_logo" />
          </a>
        </Link>
      </div>
      <div className={styles.navigator}>
        <Link href="/">
          <a>
            <Image src={home} alt="Home_btn" />
          </a>
        </Link>
        <Link href="/PetCollection">
          <a>
            <Image src={favorite} alt="PetCollections_btn" />
          </a>
        </Link>
        <Link href="/PetPavilion">
          <a>
            <Image src={pavilion} alt="Style_btn" />
          </a>
        </Link>
        <Link href="/PetRescue">
          <a>
            <Image src={rescue} alt="Rescue_btn" />
          </a>
        </Link>
        <Link href="/PetHospital">
          <a>
            <Image src={hospital} alt="Hospital_btn" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
