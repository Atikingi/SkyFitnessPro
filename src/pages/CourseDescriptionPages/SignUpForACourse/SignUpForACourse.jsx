import React from 'react';
import styles from './style.module.css';
import { UIButton } from '../../../components/UI/UIButton/UIButton';
import { useAddCourseForUserMutation } from '../../../services/fitnessApi';
import Loader from '../../../components/Loader/Loader';
export const SignUpForACourse = () => {
  const text = 'Записаться на тренировку';

  const [trigger, { isLoading }] = useAddCourseForUserMutation();

  // const userId = localStorage.getItem('id');

  const addCourseHandler = () => {
    trigger({
      id: 'gi9LwGclwZfR0jm3rALz9vZzIyM2',
      courseId: '3781f9e6'
    });
  };

  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <p className={styles.text}>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и
          тренера, с которым тренировки принесут здоровье и радость!
        </p>
      </div>
      <div className={styles.button}>
        {isLoading ? <Loader /> : <UIButton text={text} onClick={addCourseHandler}></UIButton>}
      </div>
    </div>
  );
};
