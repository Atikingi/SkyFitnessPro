import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

export const ProfCard = ({ id, courseName, color, setColorOnClick }) => {
  const colors = {
    purple: styles.blockPurple,
    blue: styles.blockBlue,
    orange: styles.blockOrange,
    green: styles.blockGreen,
    aqua: styles.blockAqua
  };

  return (
    <Link onClick={setColorOnClick} to={`course/${id}`} className={colors[color]}>
      <div>
        <p className={styles.name}>{courseName}</p>
      </div>
    </Link>
  );
};
