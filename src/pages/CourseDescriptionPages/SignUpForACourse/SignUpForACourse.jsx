import React, { useState } from 'react';
import styles from './style.module.css';
import { UIButton } from '../../../components/UI/UIButton/UIButton';
import { useAddCourseForUserMutation } from '../../../services/fitnessApi';
import Loader from '../../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getUserId } from '../../../store/selectors/authSelector';
import { useParams } from 'react-router-dom';
import UIModal from '../../../components/UI/UIModal/UiModal';
import { Login } from '../../../components/LoginRegistration/Login';
// import SuccessfullyAdding from '../../../components/SuccessfullyAdding/SuccessfullyAdding';

// const [showSuccessModal, setShowSuccessModal] = useState(false);

export const SignUpForACourse = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const showLoginFormHandle = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  // const showSuccessModalHandle = () => {
  //   setTimeout(() => {
  //     setShowSuccessModal(() => false);
  //   }, 2000);
  //
  //   return setShowSuccessModal(() => true);
  // };

  const text = 'Добавить курс';

  const userId = useSelector(getUserId);
  const { id: courseId } = useParams();

  const [trigger, { isLoading }] = useAddCourseForUserMutation();

  const addCourseHandler = () => {
    if (!userId) {
      return showLoginFormHandle();
    }

    trigger({
      id: userId,
      courseId: courseId
    });
  };

  // if (isSuccess && !showSuccessModal) {
  //   showSuccessModalHandle();
  // }

  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <p className={styles.text}>
          Вы можете приобрести курс, с которым тренировки принесут здоровье и радость, нажав на
          кнопку ниже!
        </p>
      </div>
      <div className={styles.button}>
        {isLoading ? <Loader /> : <UIButton text={text} onClick={addCourseHandler}></UIButton>}
      </div>
      {showLoginForm && (
        <UIModal>
          <Login closeModal={showLoginFormHandle} />
        </UIModal>
      )}
      {/*{showSuccessModal && (*/}
      {/*  <UIModal>*/}
      {/*    <SuccessfullyAdding />*/}
      {/*  </UIModal>*/}
      {/*)}*/}
    </div>
  );
};
