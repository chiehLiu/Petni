import SearchAreaTitle from '../../atoms/SearchAreaTitle';
import Button from '../../atoms/Button';

import styles from './index.module.scss';

const SearchArea = () => {
  return (
    <div className={styles.SearchArea}>
      <div>
        <SearchAreaTitle>我想尋找</SearchAreaTitle>
      </div>
      <div>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
      </div>
      <div>
        <SearchAreaTitle>性別</SearchAreaTitle>
      </div>
      <div>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
      </div>
      <div>
        <SearchAreaTitle>年齡</SearchAreaTitle>
      </div>
      <div>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
      </div>
      <div>
        <SearchAreaTitle>顏色</SearchAreaTitle>
      </div>
      <div>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
        <Button content={'123'}></Button>
      </div>
      <div className={styles.ToggleBtn}>
        <SearchAreaTitle>搜尋附近</SearchAreaTitle>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.ToggleBtn}>
        <SearchAreaTitle>互動音效</SearchAreaTitle>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div>
        <Button content={'123'}></Button>
      </div>
    </div>
  );
};

export default SearchArea;
