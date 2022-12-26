import React from 'react';
import LogoutIcon from '../../Icons/LogoutIcon';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { logout } from '../../../store/slices/authSlice';
import styles from './style.module.css';

const LogoutButton = ({ lightColor }) => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const logoutHandler = async () => {
    await signOut(auth).catch((e) => {
      console.log(e);
    });

    dispatch(logout());
  };

  return (
    <div className={lightColor ? styles.button : styles.buttonDark} onClick={logoutHandler}>
      <LogoutIcon />
    </div>
  );
};

export default LogoutButton;
