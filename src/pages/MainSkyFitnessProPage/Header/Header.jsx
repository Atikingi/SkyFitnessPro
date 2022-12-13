import React, { useState } from 'react';
import styles from './style.module.css';
import Logo from '../../../components/Logo/Logo';
import UIModal from '../../../components/UI/UIModal/UiModal';
import { Login } from '../../../components/LoginRegistration/Login';
import LoginAvatarBlock from '../../../components/LoginAvatar/LoginAvatarBlock';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../../store/selectors/authSelector';

export const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const isAuth = useSelector(getAuthStatus);

  const showLoginFormHandle = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <Logo color="#ffffff" />
      {isAuth ? (
        <LoginAvatarBlock lightColor={true} />
      ) : (
        <button className={styles.button} onClick={showLoginFormHandle}>
          Войти
        </button>
      )}
      {showLoginForm && (
        <UIModal>
          <Login closeModal={showLoginFormHandle} />
        </UIModal>
      )}
    </header>
  );
};
