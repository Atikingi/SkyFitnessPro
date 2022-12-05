import React from 'react';
import styles from './style.module.css';
import WorkoutItem from './WorkoutItem/WorkoutItem';

const WorkoutSelectionForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Выберите тренировку</h2>
      <ul className={styles.list}>
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
      </ul>
    </div>
  );
};

export default WorkoutSelectionForm;
