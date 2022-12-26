import styles from './style.module.css';

export const CoverCourseDescription = ({ name }) => {
  const chosenColor = localStorage.getItem('color');

  const colors = {
    purple: styles.blockPurple,
    blue: styles.blockBlue,
    orange: styles.blockOrange,
    green: styles.blockGreen,
    aqua: styles.blockAqua
  };

  return (
    <div className={colors[chosenColor]}>
      <h1 className={styles.name}>{name}</h1>
    </div>
  );
};
