import styles from './PetCollection.module.scss';

import { FC } from 'react';

import Header from '../../components/common/molecules/Header';
import CardPetCollection from '../../components/common/atoms/CardPetCollection';

import dummyCollectionImg from '/public/PetCollection/dummyCollectionImg.svg';
import ForRescueAndCollection from '../../components/layouts/ForRescueAndCollection';

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

  return (
    <>
      <ForRescueAndCollection>
        {dummyCollection.map((list) => {
          return (
            <>
              <CardPetCollection src={list.src} animalName={list.name} area={list.location} alt={list.name} />
            </>
          );
        })}
      </ForRescueAndCollection>
    </>
  );
};

export default PetCollection;
