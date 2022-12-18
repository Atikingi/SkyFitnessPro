import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

export const ProfCard = ({ id, courseName, color }) => {
  const colors = {
    purple: styles.blockPurple,
    blue: styles.blockBlue,
    orange: styles.blockOrange,
    green: styles.blockGreen,
    aqua: styles.blockAqua
  };

  return (
    //при работе над рендером страницы курса заменить путь в линке с учетом id, а id с div убрать
    <Link to="yoga" className={colors[color]}>
      <div id={id}>
        <p className={styles.name}>{courseName}</p>
      </div>
    </Link>
  );
};
