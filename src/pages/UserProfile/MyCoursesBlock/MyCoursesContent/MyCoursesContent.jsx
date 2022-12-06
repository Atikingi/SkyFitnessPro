import React from 'react';
import { ProfCard } from '../../../../components/ProfCard/ProfCard';
import styles from './style.module.css';
import { ButtonGreen } from '../../../../components/ButtonGreen/ButtonGreen';
const MyCoursesContent = () => {
  return (
    <div className={styles.cardsBlock}>
      <div className={styles.cardBlock}>
        <ProfCard courseName="Йога" />
        <ButtonGreen absolute="absolute" btnText="Перейти →" />
      </div>
      <div className={styles.cardBlock}>
        <ProfCard courseName="Стретчинг" />
        <ButtonGreen absolute="absolute" btnText="Перейти →" />
      </div>
      <div className={styles.cardBlock}>
        <ProfCard courseName="Танцевальный фитнес" />
        <ButtonGreen absolute="absolute" btnText="Перейти →" />
      </div>
    </div>
  );
};

export default MyCoursesContent;
