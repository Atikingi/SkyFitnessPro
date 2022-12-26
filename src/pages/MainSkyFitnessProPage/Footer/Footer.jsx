import { ButtonGreen } from '../../../components/ButtonGreen/ButtonGreen';
import styles from './style.module.css';

export const Footer = (props) => {
  const btnText = 'Наверх ↑';
  return (
    <footer className={styles.footer}>
      <ButtonGreen
        className={styles.button}
        btnText={btnText}
        onClick={props.onClick}
      ></ButtonGreen>
    </footer>
  );
};
