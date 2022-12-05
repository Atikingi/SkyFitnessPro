import React from 'react';
import style from './style.module.css';
import Logo from '../../../components/Logo/Logo';
import LoginAvatarBlock from '../../../components/LoginAvatar/LoginAvatarBlock';

const CourseHeader = () => {
  return (
    <header className={style.header}>
      <Logo />
      <LoginAvatarBlock />
    </header>
  );
};

export default CourseHeader;
