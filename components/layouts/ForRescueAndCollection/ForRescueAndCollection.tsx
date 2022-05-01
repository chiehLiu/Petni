import {FC} from 'react';
import Header from '../../common/molecules/Header';

import styles from './ForRescueAndCollection.module.scss';

const ForRescueAndCollection:FC = (content) => {
  return (
    <>
      <Header></Header>
      <div className={styles.CardPetCollectionLayout}>
        {content}
      </div>
    </>
  )
}

export default ForRescueAndCollection;