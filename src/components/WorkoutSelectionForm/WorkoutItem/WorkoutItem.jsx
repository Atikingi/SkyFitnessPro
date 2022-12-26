import WorkoutDoneIcon from '../../Icons/WorkoutDoneIcon';
import styles from './style.module.css';

const WorkoutItem = ({ title, subtitle, status }) => {
  return (
    <div className={status ? styles.activeContainer : styles.container}>
      <h3 className={status ? styles.activeTitle : styles.title}>{title}</h3>
      <p className={status ? styles.activeSubtitle : styles.subtitle}>{subtitle}</p>
      {status && (
        <div className={styles.icon}>
          <WorkoutDoneIcon />
        </div>
      )}
    </div>
  );
};

export default WorkoutItem;
