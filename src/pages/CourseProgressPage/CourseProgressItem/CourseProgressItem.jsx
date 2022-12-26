import CourseProgressBar from '../CourseProgressBar/CourseProgressBar';
import styles from './style.module.css';

const CourseProgressItem = ({ title, colorNumber, id }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <CourseProgressBar colorNumber={colorNumber} id={id} />
    </div>
  );
};

export default CourseProgressItem;
