import React from 'react';
import styles from './style.module.css';
export const Description = () => {
  const text =
    'Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.';
  return <p className={styles.text}>{text}</p>;
};
