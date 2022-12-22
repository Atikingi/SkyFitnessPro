import React, { useState } from 'react';
import styles from './style.module.css';
import Logo from '../../Logo/Logo';
import { UIButton } from '../../UI/UIButton/UIButton';
import CloseModalIcon from '../../Icons/CloseModalIcon';
import { getAuth, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../../../store/slices/authSlice';

export const NewLogin = ({ closeModal }) => {
  const dispatch = useDispatch();

  const auth = getAuth();
  const user = auth.currentUser;

  const [login, setLogin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loginHandler = (event) => {
    const login = event.target.value;
    setLogin(login);
  };

  const resetUsername = async () => {
    setLoading(true);
    try {
      await updateProfile(user, {
        displayName: login
      });

      dispatch(updateUsername({ name: login }));

      setLoading(false);
      closeModal();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className={styles.newLoginModal}>
      <Logo color={'#000000'} />
      <div className={styles.closeButton} onClick={closeModal}>
        <CloseModalIcon />
      </div>
      <div className={styles.sign}>Новый логин:</div>
      <input
        className={`${styles.input} ${styles.inputBlock}`}
        name="логин"
        placeholder="Логин"
        onChange={loginHandler}
      />
      <UIButton onClick={resetUsername}>Сохранить</UIButton>
      {error && <div className={styles.error}>{error}</div>}
      {loading && <div className={styles.loadingSpinner}></div>}
    </div>
  );
};
