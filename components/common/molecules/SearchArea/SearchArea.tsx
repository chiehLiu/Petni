import SearchAreaTitle from '../../atoms/SearchAreaTitle/SearchAreaTitle';
import Button from '../../atoms/Button/Button';

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
        <Button content={'不拘'}></Button>
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
        <Button content={'幼齡'}></Button>
        <Button content={'成年'}></Button>
        <Button content={'不拘'}></Button>
      </div>
      <div>
        <SearchAreaTitle>顏色</SearchAreaTitle>
      </div>
      <div className={styles.color}>
        <Button content={'黑貓'}></Button>
        <Button content={'白貓'}></Button>
        <Button content={'乳牛貓'}></Button>
        <Button content={'橘貓'}></Button>
        <Button content={'虎斑貓'}></Button>
        <Button content={'三色貓'}></Button>
        <Button content={'玳瑁貓'}></Button>
        <Button content={'不拘'}></Button>
      </div>
      <div className={styles.togglebtn}>
        <SearchAreaTitle>搜尋附近</SearchAreaTitle>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.togglebtn}>
        <SearchAreaTitle>互動音效</SearchAreaTitle>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={styles.submit}>
        <Button content={'套用'}></Button>
      </div>
    </div>
  );
};

export default SearchArea;
