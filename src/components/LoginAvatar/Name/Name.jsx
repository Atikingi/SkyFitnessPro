import React from 'react';
import { useSelector } from 'react-redux';
import { getName } from '../../../store/selectors/authSelector';
import styles from './style.module.css';

const Name = ({ lightColor }) => {
  const name = useSelector(getName);

  return <div className={lightColor ? styles.name : styles.darkName}>{name}</div>;
};

export default Name;
