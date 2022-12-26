import styles from './style.module.css';

export const CourseDirections = ({ directions }) => {
  return (
    <ul className={styles.list}>
      {directions.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
};
