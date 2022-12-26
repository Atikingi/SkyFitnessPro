import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import { Login } from '../LoginRegistration/Login';
import LoginAvatarBlock from '../LoginAvatar/LoginAvatarBlock';
import UIModal from '../UI/UIModal/UiModal';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/selectors/authSelector';
import styles from './style.module.css';

const Header = ({ logoColor, lightColor }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const isAuth = useSelector(getAuthStatus);

  const showLoginFormHandle = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <Logo color={logoColor} />
      {isAuth ? (
        <LoginAvatarBlock lightColor={lightColor} />
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

export default Header;
