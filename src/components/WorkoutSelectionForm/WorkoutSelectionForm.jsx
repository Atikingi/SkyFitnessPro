import { Link } from 'react-router-dom';
import WorkoutItem from './WorkoutItem/WorkoutItem';
import CloseModalIcon from '../Icons/CloseModalIcon';
import styles from './style.module.css';

const WorkoutSelectionForm = ({ closeModal, workouts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.closeButton} onClick={closeModal}>
        <CloseModalIcon />
      </div>
      <h2 className={styles.title}>Выберите тренировку</h2>
      <ul className={styles.list}>
        {workouts.map(({ _id, title, subtitle, status }) => (
          <Link className={styles.link} key={_id} to={`/course/${_id}/progress/`}>
            <WorkoutItem title={title} subtitle={subtitle} status={status} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutSelectionForm;
