import styles from './style.module.css';

export const Title = () => {
  return (
    <div className={styles.titleBlock}>
      <div className={styles.block}>
        <p className={styles.text}>Онлайн-тренировки для занятий дома</p>
        <p className={styles.titleText}>Начните заниматься спортом и улучшите качество жизни</p>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};
