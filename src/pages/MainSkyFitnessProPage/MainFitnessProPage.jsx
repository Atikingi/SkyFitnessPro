import React from 'react';
import styles from './style.module.css';
import { Header } from './Header/Header';
import { Title } from './Title/Title';
import { ProfCard } from '../../components/ProfCard/ProfCard';
import { Footer } from './Footer/Footer';
import { Link } from 'react-router-dom';

export const MainFitnessPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Title />
      <div className={styles.cardsBlock}>
        <Link to="yoga">
          <ProfCard courseName="Йога" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};
