import React from 'react';
import Header from '../../components/Header/Header';
import { Title } from './Title/Title';
import { ProfCard } from '../../components/ProfCard/ProfCard';
import { Footer } from './Footer/Footer';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export const MainFitnessPage = () => {
  return (
    <div className={styles.main}>
      <Header logoColor="#ffffff" lightColor={true} />
      <Title />
      <div className={styles.cardsBlock}>
        <Link to="yoga" className={styles.link}>
          <ProfCard courseName="Йога" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};
