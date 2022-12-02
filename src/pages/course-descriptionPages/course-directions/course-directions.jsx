import React from 'react';
import styles from './style.module.css';

export const CourseDirections = () => {
  const list = 'Йога для новичков';
  return (
    <ul className={styles.list}>
      <li>{list}</li>
      <li>{list}</li>
      <li>{list}</li>

      <li>{list}</li>
      <li>{list}</li>
      <li>{list}</li>
    </ul>
  );
};
