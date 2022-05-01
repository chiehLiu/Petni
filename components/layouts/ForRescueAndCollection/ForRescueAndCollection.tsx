import {FC} from 'react';

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