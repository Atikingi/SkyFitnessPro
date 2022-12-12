import React from 'react';
import styles from './style.module.css';
import { useSelector } from 'react-redux';
import { getName } from '../../../store/selectors/authSelector';

const Name = ({ lightColor }) => {
  const name = useSelector(getName);

  return <div className={lightColor ? styles.name : styles.darkName}>{name}</div>;
};

export default Name;
