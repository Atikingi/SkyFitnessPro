import React from 'react';
import { ProfCard } from '../../../../components/ProfCard/ProfCard';
import styles from './style.module.css';
import { ButtonGreen } from '../../../../components/ButtonGreen/ButtonGreen';
import Loader from '../../../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getUserId } from '../../../../store/selectors/authSelector';
import { useFetchCoursesQuery, useFetchUserCoursesQuery } from '../../../../services/fitnessApi';
import themesGenerator from '../../../../lib/themesGenerator';
import { cardsColors } from '../../../../constants/colorsArrays';

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

  return (
    <div className={styles.cardsBlock}>
      {isLoading && <Loader />}
      {isSuccess &&
        data.map(({ _id, name }, i) => (
          <div key={_id} className={styles.cardBlock}>
            <ProfCard courseName={name} id={_id} color={themeArr[i]} />
            <ButtonGreen absolute="absolute" btnText="Перейти →" />;
          </div>
        ))}
    </div>
  );
};

export default MyCoursesContent;
