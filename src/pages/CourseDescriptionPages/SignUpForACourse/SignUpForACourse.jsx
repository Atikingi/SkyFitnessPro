import React from 'react';
import styles from './style.module.css';
import { UIButton } from '../../../components/UI/UIButton/UIButton';
export const SignUpForACourse = () => {
  const text = 'Записаться на тренировку';
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <p className={styles.text}>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и
          тренера, с которым тренировки принесут здоровье и радость!
        </p>
      </div>
      <div className={styles.button}>
        <UIButton text={text}></UIButton>
      </div>
    </div>
  );
};
