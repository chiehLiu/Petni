import Header from '../../common/molecules/Header/Header';
import SearchArea from '../../common/molecules/SearchArea';
import PhotoArea from '../../common/molecules/PhotoArea/PhotoArea';
import OtherArea from '../../common/molecules/OtherArea';

import styles from './index.module.scss';
const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content_container}>
        <SearchArea />
        <div className={styles.content_area}>
          <PhotoArea />
          <OtherArea />
        </div>
      </div>
    </div>
  );
};

export default Home;