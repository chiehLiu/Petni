import styles from './PetCollection.module.scss';

import { FC } from 'react';

import Header from '../../components/common/molecules/Header';
import CardPetCollection from '../../components/common/atoms/CardPetCollection';

const PetCollection: FC = () => {
  const dummyCollection: {
    name: string;
    gender: string;
    location: string;
    src: string;
  }[] = [
    { name: 'test1', gender: 'female', location: '台南市南區', src: '../../public/PetCollection/dummyCollectionImg.svg'},
    { name: 'test2', gender: 'male', location: '新竹市', src: '../../public/PetCollection/dummyCollectionImg.svg' },
    { name: 'test3', gender: 'female', location: '高雄市', src: '../../public/PetCollection/dummyCollectionImg.svg' },
    { name: 'test4', gender: 'male', location: '台北市', src: '../../public/PetCollection/dummyCollectionImg.svg' },
    { name: 'test5', gender: 'female', location: '新北市', src: '../../public/PetCollection/dummyCollectionImg.svg' },
    { name: 'test6', gender: 'male', location: '台南市南區', src: '../../public/PetCollection/dummyCollectionImg.svg' },
  ];

  return (
    <>
      <Header></Header>
      <div>
      {
        dummyCollection.map((list) => {
          <CardPetCollection src={list.src} alt={list.name} area={list.location} animalName={list.name} gender={list.gender}/>
        })
      }
      </div>
    </>
  );
};

export default PetCollection;
