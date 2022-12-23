import React, { useState } from 'react';
import { ProfCard } from '../../../../components/ProfCard/ProfCard';
import styles from './style.module.css';
import { ButtonGreen } from '../../../../components/ButtonGreen/ButtonGreen';
import Loader from '../../../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getUserId } from '../../../../store/selectors/authSelector';
import { useFetchCoursesQuery, useFetchUserCoursesQuery } from '../../../../services/fitnessApi';
import themesGenerator from '../../../../lib/themesGenerator';
import { cardsColors } from '../../../../constants/colorsArrays';
import UIModal from '../../../../components/UI/UIModal/UiModal';
import WorkoutSelectionForm from '../../../../components/WorkoutSelectionForm/WorkoutSelectionForm';

const MyCoursesContent = () => {
  const userId = useSelector(getUserId);

  const { data: userCoursesIds } = useFetchUserCoursesQuery(userId);

  const { data, isSuccess, isLoading } = useFetchCoursesQuery('', {
    selectFromResult: ({ data, isSuccess, isLoading }) => ({
      data: data?.filter((post) => userCoursesIds?.includes(post._id)),
      isSuccess,
      isLoading
    })
  });

  let themeArr;

  if (isSuccess) {
    themeArr = themesGenerator(cardsColors, data);
  }

  const [showLoginForm, setShowLoginForm] = useState(false);

  const showLoginFormHandle = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  return (
    <div className={styles.cardsBlock}>
      {isLoading && <Loader />}
      {isSuccess &&
        data.map(({ _id, name }, i) => (
          <div key={_id} className={styles.cardBlock}>
            <ProfCard courseName={name} id={_id} color={themeArr[i]} onClick={console.log(_id)} />

            <ButtonGreen absolute="absolute" btnText="Перейти →" onClick={showLoginFormHandle} />
            {showLoginForm && (
              <UIModal>
                <WorkoutSelectionForm closeModal={showLoginFormHandle} />
              </UIModal>
            )}
          </div>
        ))}
    </div>
  );
};

export default MyCoursesContent;
