import React, { useEffect, useState } from 'react';
import { UIButton } from '../UI/UIButton/UIButton';
import Logo from '../Logo/Logo';
import CloseModalIcon from '../Icons/CloseModalIcon';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAddUserDataMutation } from '../../services/fitnessApi';
import { passwordHandler } from '../../lib/LoginRegistration/passwordHandler';
import styles from './style.module.css';

export function Registration({ closeModal }) {
  const auth = getAuth();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [emailVisited, setEmailVisited] = useState(false);
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [emailError, setEmailError] = useState('Логин не может быть пустым');
  const [passwordError, setError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const [trigger] = useAddUserDataMutation();

  const loginHandler = (event) => {
    const login = event.target.value;
    setLogin(login);
  };

  const emailHandler = (event) => {
    const email = event.target.value;
    setEmail(email);
    email ? setEmailError('') : setEmailError('E-mail не может быть пустым');
    const regex = /.+@.+\..+/i;
    regex.test(String(email).toLowerCase())
      ? setEmailError('')
      : setEmailError('Некорректный e-mail');
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
    emailError || passwordError ? setFormValid(false) : setFormValid(true);
  }, [emailError, passwordError]);

  const comparePasswords = (event) => {
    event.preventDefault();
    if (!passwordRepeat) {
      setError('Повторите пароль');
      return;
    }
    password === passwordRepeat ? createUser() : setError('Пароли не совпадают');
  };

  async function createUser() {
    setLoginLoading(true);
    try {
      const userData = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userData.user.uid;

      await updateProfile(auth.currentUser, {
        displayName: login
      });

      trigger({
        id: userId,
        username: login
      });

      setLoginLoading(false);
      closeModal();
    } catch (error) {
      setLoginLoading(false);
      setError('Не получилось, описание в консоли');
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginModalBlock}>
        <div className={styles.inputBlock}>
          <Logo color={'#000000'} />
          <div className={styles.closeButton} onClick={closeModal}>
            <CloseModalIcon />
          </div>
          <input
            className={styles.input}
            onChange={loginHandler}
            value={login}
            name="name"
            placeholder="Имя"
            type="text"
          />
          {emailVisited && emailError && <div className={styles.loginError}>{emailError}</div>}
          <input
            className={styles.input}
            onChange={emailHandler}
            value={email}
            onBlur={blurHandler}
            name="email"
            placeholder="Email"
            type="text"
          />

          {passwordVisited && passwordError && (
            <div className={styles.passwordError}>{passwordError}</div>
          )}
          <input
            className={styles.input}
            onChange={(event) => passwordHandler(event, setPassword, setPasswordRepeat, setError)}
            value={password}
            onBlur={blurHandler}
            name="password"
            placeholder="Пароль"
            type="password"
          />

          <input
            className={styles.input}
            onChange={(event) => passwordHandler(event, setPassword, setPasswordRepeat, setError)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') comparePasswords(event);
            }}
            name="passwordRepeat"
            placeholder="Повторите пароль"
            type="password"
          />
        </div>
        <div className={styles.buttonBlock}>
          <UIButton disabled={!formValid} onClick={comparePasswords}>
            Зарегистрироваться
          </UIButton>
        </div>
        {loginLoading && <div className={styles.loadingSpinner}></div>}
      </div>
    </div>
  );
}
