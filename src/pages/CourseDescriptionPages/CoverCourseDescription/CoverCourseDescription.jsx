import React from 'react';
import styles from './style.module.css';

export const CoverCourseDescription = ({ name }) => {
  const chosenColor = localStorage.getItem('color');
  const colors = [
    ['purple', styles.blockPurple],
    ['blue', styles.blockBlue],
    ['orange', styles.blockOrange],
    ['green', styles.blockGreen],
    ['aqua', styles.blockAqua]
  ];

  function getColor() {
    for (let elem of colors) {
      if (chosenColor === elem[0]) {
        return elem[1];
      }
    }
  }

  return (
    <div className={getColor()}>
      <h1 className={styles.name}>{name}</h1>
    </div>
  );
};
