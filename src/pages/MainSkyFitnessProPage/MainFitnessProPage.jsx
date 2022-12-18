import React from 'react';
import Header from '../../components/Header/Header';
import { Title } from './Title/Title';
import { ProfCard } from '../../components/ProfCard/ProfCard';
import { Footer } from './Footer/Footer';
import styles from './style.module.css';
import { useFetchCoursesQuery } from '../../services/fitnessApi';
import themesGenerator from '../../lib/themesGenerator';
import { cardsColors } from '../../constants/colorsArrays';
import Loader from '../../components/Loader/Loader';

export const MainFitnessPage = () => {
  const { data, isSuccess, isLoading } = useFetchCoursesQuery('');

  let themeArr;

  if (isSuccess) {
    themeArr = themesGenerator(cardsColors, data);
  }

  return (
    <div className={styles.main}>
      <Header logoColor="#ffffff" lightColor={true} />
      <Title />
      <div className={styles.cardsBlock}>
        {isLoading && <Loader />}
        {isSuccess &&
          data.map(({ name, _id }, i) => (
            <ProfCard key={_id} courseName={name} id={_id} color={themeArr[i]} />
          ))}
      </div>
      <Footer />
    </div>
  );
};
