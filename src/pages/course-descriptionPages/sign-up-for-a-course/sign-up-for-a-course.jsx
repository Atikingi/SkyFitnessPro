import React from 'react';
import styles from './style.module.css';
export const SignUpForACourse = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <p className={styles.text}>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и
          тренера, с которым тренировки принесут здоровье и радость!
        </p>
        <button>Записаться на тренировку</button>
      </div>
    </div>
  );
};
