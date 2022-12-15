import React from 'react';
import { ProfCard } from '../../../../components/ProfCard/ProfCard';
import styles from './style.module.css';
import { ButtonGreen } from '../../../../components/ButtonGreen/ButtonGreen';
import { Link } from 'react-router-dom';

const MyCoursesContent = () => {
  return (
    <div className={styles.cardsBlock}>
      <Link to="progress" className={styles.link}>
        <div className={styles.cardBlock}>
          <ProfCard courseName="Йога" />
          <ButtonGreen absolute="absolute" btnText="Перейти →" />
        </div>
      </Link>
      <Link to="progress" className={styles.link}>
        <div className={styles.cardBlock}>
          <ProfCard courseName="Стретчинг" />
          <ButtonGreen absolute="absolute" btnText="Перейти →" />
        </div>
      </Link>
      <Link to="progress" className={styles.link}>
        <div className={styles.cardBlock}>
          <ProfCard courseName="Танцевальный фитнес" />
          <ButtonGreen absolute="absolute" btnText="Перейти →" />
        </div>
      </Link>
    </div>
  );
};

export default MyCoursesContent;
