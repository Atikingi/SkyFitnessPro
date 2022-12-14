import React from 'react';
import styles from './style.module.css';

export const ButtonGreen = (props) => {
  return (
    <button
      className={props.absolute === 'absolute' ? styles.buttonPositioned : styles.button}
      onClick={props.onClick}
      id={props.id}
    >
      {props.btnText}
    </button>
  );
};
