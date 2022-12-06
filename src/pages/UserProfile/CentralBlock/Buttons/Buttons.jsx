import React from 'react';
import styles from './style.module.css';
import { UIButton } from '../../../../components/UI/UIButton/UIButton';
const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <UIButton text="Редактировать логин" />
      <UIButton text="Редактировать пароль" />
    </div>
  );
};

export default Buttons;
