import styles from './style.module.css';

export const UIButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
