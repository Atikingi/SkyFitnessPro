import React from 'react';
import styles from './style.module.css';
export const Description = ({ description }) => {
  return <p className={styles.text}>{description}</p>;
};
