import {FC} from 'react';
import Header from '../../common/molecules/Header';

import styles from './ForRescueAndCollection.module.scss';

const ForRescueAndCollection:FC= (children) => {
  return (
    <>
      <Header/>
      <main className={styles.CardPetCollectionLayout}/>
    </>
  )
}

export default ForRescueAndCollection;