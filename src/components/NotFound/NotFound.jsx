import React from 'react';
import Logo from '../Logo/Logo';
import style from './style.module.css';

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <Logo color="#000" />
      <div className={style.img} />
      <div className={style.text}>Страница не найдена. Вы попали в Мордор</div>
    </div>
  );
};

export default NotFound;
