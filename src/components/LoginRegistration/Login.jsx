import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './style.module.css';
import { UIButton } from '../UI/UIButton/UIButton';
import Logo from '../Logo/Logo';
import UIModal from '../UI/UIModal/UiModal';
import { Registration } from './Registration';
import CloseModalIcon from '../Icons/CloseModalIcon';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';

export function Login({ closeModal }) {
  const auth = getAuth();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('Логин не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [emailVisited, setEmailVisited] = useState(false);
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [enterError, setEnterError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const loginError = false;

  const loginHandler = (event) => {
    const userEmail = event.target.value;
    setUserEmail(userEmail);
    setEmailError(userEmail ? '' : 'E-mail не может быть пустым');
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    event.target.value ? setPasswordError('') : setPasswordError('Пароль не может быть пустым');
  };

  const blurHandler = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmailVisited(true);
        break;
      case 'password':
        setPasswordVisited(true);
        break;
    }
  };
  useEffect(() => {
    setFormValid(!(emailError || passwordError));
  }, [emailError, passwordError]);

  async function enterHandler(event) {
    event.preventDefault();

    setLoginLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, userEmail, password);
      const { accessToken, email, refreshToken, displayName, uid } = await response.user;

      dispatch(
        login({
          id: uid,
          email,
          token: accessToken,
          name: displayName,
          password: password
        })
      );

      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('id', uid);
      console.log(response);
      closeModal();

      setPasswordError('');
      setLoginLoading(false);
    } catch (error) {
      setLoginLoading(false);
      setEnterError(error.message);
    }
  }

  const registrationHandler = (event) => {
    event.preventDefault();

    setShowRegistrationForm(true);
  };

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false);
  };

  if (loginError) return <p>{loginError.message}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.loginModalBlock}>
        <div className={styles.inputBlock}>
          <Logo color={'#000000'} />
          <div className={styles.closeButton} onClick={closeModal}>
            <CloseModalIcon />
          </div>
          {emailVisited && emailError && <div className={styles.loginError}>{emailError}</div>}
          <input
            className={styles.input}
            onChange={loginHandler}
            onBlur={blurHandler}
            name="email"
            placeholder="Email"
          />
          {passwordVisited && passwordError && (
            <div className={styles.passwordError}>{passwordError}</div>
          )}
          <input
            className={styles.input}
            onChange={passwordHandler}
            onBlur={blurHandler}
            onKeyDown={(event) => {
              if (event.key === 'Enter') enterHandler(event);
            }}
            type="password"
            name="password"
            placeholder="Пароль"
          />
        </div>
        {enterError && <div className={styles.passwordError}>{enterError}</div>}
        <div className={styles.buttonBlock}>
          <UIButton disabled={!formValid} onClick={enterHandler}>
            Войти
          </UIButton>
          <UIButton onClick={registrationHandler}>Зарегистрироваться</UIButton>
        </div>
        {loginLoading && <div className={styles.loadingSpinner}></div>}
      </div>
      {showRegistrationForm && (
        <UIModal>
          <Registration closeModal={closeRegistrationForm} />
        </UIModal>
      )}
    </div>
  );
}
