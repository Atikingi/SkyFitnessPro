import styles from './style.module.css';

export const UIButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {props.loading ? <div className={styles.loadingSpinner} /> : children}
    </button>
  );
};
