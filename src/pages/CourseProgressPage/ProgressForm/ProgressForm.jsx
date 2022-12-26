import { UIButton } from '../../../components/UI/UIButton/UIButton';
import CloseModalIcon from '../../../components/Icons/CloseModalIcon';
import styles from './style.module.css';

const ProgressForm = ({ onSubmit, exercises, closeModal }) => {
  return (
    <form className={styles.progressForm} onSubmit={onSubmit}>
      <div className={styles.closeButton} onClick={closeModal}>
        <CloseModalIcon />
      </div>
      <h2 className={styles.title}>Мой прогресс</h2>
      {exercises.map(({ _id, name }) => (
        <label key={_id} htmlFor={_id} className={styles.subtitle}>
          {`Сколько раз вы выполнили упражнение: ${name}`}
          <input
            className={styles.progressValue}
            name={_id}
            id={_id}
            type="number"
            placeholder="Введите значение"
            required
          />
        </label>
      ))}
      <UIButton>Отправить</UIButton>
    </form>
  );
};

export default ProgressForm;
