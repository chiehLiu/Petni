import styles from './PetCollection.module.scss';

import { FC } from 'react';

import CardPetCollection from '../../components/common/atoms/CardPetCollection';

import dummyCollectionImg from '/public/PetCollection/dummyCollectionImg.svg';
import LayoutForContent from '../../components/layouts/LayoutForContent';

const PetCollection: FC = () => {
  const dummyCollection: {
    name: string;
    gender: string;
    location: string;
    src: string;
  }[] = [
    { name: 'test1', gender: 'female', location: '台南市南區', src: dummyCollectionImg },
    { name: 'test2', gender: 'male', location: '新竹市', src: dummyCollectionImg },
    { name: 'test3', gender: 'female', location: '高雄市', src: dummyCollectionImg },
    { name: 'test4', gender: 'male', location: '台北市', src: dummyCollectionImg },
    { name: 'test5', gender: 'female', location: '新北市', src: dummyCollectionImg },
    { name: 'test6', gender: 'male', location: '台南市南區', src: dummyCollectionImg },
  ];

  const CardPetCollectionList = dummyCollection.map((list) => {
    return (
      <>
        <CardPetCollection src={list.src} animalName={list.name} area={list.location} alt={list.name} key={list.name}/>
      </>
    );
  });

  return (
    <LayoutForContent className={styles.CardPetCollectionListLayout}>
      {CardPetCollectionList}
    </LayoutForContent>
  );
};

export default PetCollection;
