import { UIButton } from '../../../components/UI/UIButton/UIButton';
import Loader from '../../../components/Loader/Loader';
import UIModal from '../../../components/UI/UIModal/UiModal';
import { Login } from '../../../components/LoginRegistration/Login';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserId } from '../../../store/selectors/authSelector';
import { useAddCourseForUserMutation } from '../../../services/fitnessApi';
import styles from './style.module.css';

export const SignUpForACourse = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const showLoginFormHandle = () => {
    setShowLoginForm((prevState) => !prevState);
  };

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

  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <p className={styles.text}>
          Вы можете приобрести курс, с которым тренировки принесут здоровье и радость, нажав на
          кнопку ниже!
        </p>
      </div>
      <div className={styles.button}>
        {isLoading ? <Loader /> : <UIButton onClick={addCourseHandler}>{text}</UIButton>}
      </div>
      {showLoginForm && (
        <UIModal>
          <Login closeModal={showLoginFormHandle} />
        </UIModal>
      )}
    </div>
  );
};
