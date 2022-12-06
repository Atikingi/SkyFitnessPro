import React, { useState } from 'react';
import styles from './style.module.css';
import WorkoutDoneIcon from '../../Icons/WorkoutDoneIcon';

const WorkoutItem = ({ title, subtitle }) => {
  const [isDone, setIsDone] = useState(false);

  const setDoneHandle = () => {
    setIsDone(!isDone);
  };

  return (
    <div className={isDone ? styles.activeContainer : styles.container} onClick={setDoneHandle}>
      <h3 className={isDone ? styles.activeTitle : styles.title}>{title}</h3>
      <p className={isDone ? styles.activeSubtitle : styles.subtitle}>{subtitle}</p>
      {isDone && (
        <div className={styles.icon}>
          <WorkoutDoneIcon />
        </div>
      )}
    </div>
  );
};

export default WorkoutItem;
