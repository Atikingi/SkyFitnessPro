import React, { useState } from 'react';
import styles from './style.module.css';
import Logo from '../../Logo/Logo';
import { UIButton } from '../../UI/UIButton/UIButton';
import CloseModalIcon from '../../Icons/CloseModalIcon';
import { getAuth, updatePassword } from 'firebase/auth';
import { passwordHandler } from '../../../lib/LoginRegistration/passwordHandler';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../../store/slices/authSlice';

export const NewPassword = ({ closeModal }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Пароль не может быть пустым');
  const [loading, setLoading] = useState(false);

  const resetPasswordHandler = async () => {
    setLoading(true);

    try {
      await updatePassword(user, password);

      dispatch(resetPassword({ password }));

      setLoading(false);
      closeModal();
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  };

  const comparePasswords = (event) => {
    event.preventDefault();

    if (!passwordRepeat) {
      setErrorMessage('Повторите пароль');
      return;
    }
    password === passwordRepeat ? resetPasswordHandler() : setErrorMessage('Пароли не совпадают');
  };

  const blurHandler = () => {
    setPasswordVisited(true);
  };

  return (
    <div className={styles.newPasswordModal}>
      <Logo color={'#000000'} />
      <div className={styles.closeButton} onClick={closeModal}>
        <CloseModalIcon />
      </div>
      <div className={styles.sign}>Новый пароль:</div>
      <div className={styles.inputBlock}>
        <input
          className={styles.input}
          onChange={(event) =>
            passwordHandler(event, setPassword, setPasswordRepeat, setErrorMessage)
          }
          onBlur={(event) => blurHandler(event)}
          value={password}
          name="password"
          placeholder="Пароль"
          type="password"
        />
        <input
          className={styles.input}
          onChange={(event) =>
            passwordHandler(event, setPassword, setPasswordRepeat, setErrorMessage)
          }
          onBlur={(event) => blurHandler(event)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') comparePasswords(event);
          }}
          name="passwordRepeat"
          placeholder="Повторите пароль"
          type="password"
        />
      </div>
      <UIButton text="Сохранить" onClick={comparePasswords} />
      {passwordVisited && errorMessage && <div className={styles.error}>{errorMessage}</div>}
      {loading && <div className={styles.loadingSpinner}></div>}
    </div>
  );
};
