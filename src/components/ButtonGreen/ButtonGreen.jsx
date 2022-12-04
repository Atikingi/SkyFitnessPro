import React from 'react';
import styles from './style.module.css';

export const ButtonGreen = (props) => {
  return <button className={styles.button}>{props.btnText}</button>;
};
