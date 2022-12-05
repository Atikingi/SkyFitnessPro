import React, { useState } from 'react';
import styles from './style.module.css';
import { UIButton } from '../../../components/UI/UIButton/UIButton';
import UIModal from '../../../components/UI/UIModal/UiModal';
import ProgressForm from '../ProgressForm/ProgressForm';
import ProgressFormSuccess from '../ProgressFormSuccess/ProgressFormSuccess';

const CourseExercises = () => {
  const [showProgressForm, setShowProgressForm] = useState(false);
  const [showProgressFormSuccess, setShowProgressFormSuccess] = useState(false);

  const showProgressFormHandle = () => {
    setShowProgressForm(true);
  };

  const submitFormHandle = () => {
    setShowProgressForm(false);
    setShowProgressFormSuccess(true);

    setTimeout(() => {
      setShowProgressFormSuccess(false);
    }, 1500);
  };

  const modal = showProgressForm ? (
    <UIModal>
      <ProgressForm onSubmit={submitFormHandle} />
    </UIModal>
  ) : null;

  const successModal = showProgressFormSuccess ? (
    <UIModal>
      <ProgressFormSuccess />
    </UIModal>
  ) : null;

  return (
    <div className={styles.container} onSubmit={submitFormHandle}>
      <h4 className={styles.title}>Упражнения</h4>
      <ul className={styles.list}>
        <li>Наклон вперед (10 повторений)</li>
        <li>Наклон назад (10 повторений)</li>
        <li>Поднятие ног, согнутых в коленях (5 повторений)</li>
      </ul>
      <UIButton text="Заполнить свой прогресс" onClick={showProgressFormHandle} />
      {modal}
      {successModal}
    </div>
  );
};

export default CourseExercises;
