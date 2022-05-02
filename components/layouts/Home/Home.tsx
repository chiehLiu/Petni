import Header from '../../common/molecules/Header/Header';
import SearchArea from '../../common/molecules/SearchArea';
import PhotoArea from '../../common/molecules/PhotoArea/PhotoArea';
import OtherArea from '../../common/molecules/OtherArea';

import {FC} from 'react';

import PhotoAreaImage from '../../../public/PhotoArea/PhotoAreaImage.svg';

import styles from './Home.module.scss';
import EnterPageAnimate from '../../common/organisms/EnterPageAnimate';
import { useEffect, useState } from 'react';

const Home: FC = () => {
  const [isEnteringPage, setIsEnterPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsEnterPage((preState) => !preState);
    }, 500);
  }, []);
  
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content_container}>
        <SearchArea />
        <div className={styles.content_area}>
          <PhotoArea src={PhotoAreaImage} alt={PhotoAreaImage} />
          <OtherArea />
        </div>
      </div>
      <div className={isEnteringPage ? styles.loadingEnterPage : styles.content_enterPageAnimate }>
        <EnterPageAnimate />
      </div>
    </div>
  );
};

export default Home;
