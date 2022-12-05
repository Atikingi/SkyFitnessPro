import React from 'react';
import styles from './style.module.css';
import { Header } from './Header/Header';
import { Title } from './Title/Title';
import { ProfCard } from '../../components/ProfCard/ProfCard';
import { Footer } from './Footer/Footer';

export const MainFitnessPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Title />
      <div className={styles.cardsBlock}>
        <ProfCard courseName="Йога" />
        <ProfCard courseName="Стретчинг" />
        <ProfCard courseName="Танцевальный фитнес" />
        <ProfCard courseName="Степ-аэробика" />
        <ProfCard courseName="Бодифлекс" />
      </div>

      <Footer />
    </div>
  );
};
