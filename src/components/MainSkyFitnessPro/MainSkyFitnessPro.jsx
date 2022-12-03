import React from 'react';
import styles from './style.module.css';
import { Header } from '../../pages/MainSkyFitnessProPages/Header/Header';
// import { Title } from '../../pages/MainSkyFitnessProPages/Title/Title';
import { ProfCard } from '../ProfCard/ProfCard';
import { Footer } from '../../pages/MainSkyFitnessProPages/Footer/Footer';

export const MainFitness = () => {
  return (
    <div className={styles.main}>
      <Header />
      {/* <Title /> */}
      <ProfCard />
      <Footer />
    </div>
  );
};
