import React from 'react';
import styles from './style.module.css';

export const ProfCard = () => {
  const nameKurs = 'название курса';
  console.log(styles);
  return (
    <div className={styles.prof__card_main}>
      <div className={styles.prof__card_block1}>
        <p className={styles.prof__card_name}>{nameKurs}</p>
      </div>
      <div className={styles.prof__card_block2}>
        <p className={styles.prof__card_name}>{nameKurs}</p>
      </div>
      <div className={styles.prof__card_block3}>
        <p className={styles.prof__card_name}>{nameKurs}</p>
      </div>
      <div className={styles.prof__card_block4}>
        <p className={styles.prof__card_name}>{nameKurs}</p>
      </div>
      <div className={styles.prof__card_block5}>
        <p className={styles.prof__card_name}>{nameKurs}</p>
      </div>
    </div>
  );
};
