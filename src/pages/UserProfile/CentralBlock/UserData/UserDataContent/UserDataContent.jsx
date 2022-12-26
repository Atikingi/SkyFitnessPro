import { useSelector } from 'react-redux';
import { getName, getPassword } from '../../../../../store/selectors/authSelector';
import styles from './style.module.css';

const UserDataContent = () => {
  const name = useSelector(getName);
  const password = useSelector(getPassword);

  return (
    <>
      <div className={`${styles.userDataContent} ${styles.userDataLogin}`}>Логин: {name}</div>
      <div className={`${styles.userDataContent} ${styles.userDataPassword}`}>
        Пароль: {password}
      </div>
    </>
  );
};

export default UserDataContent;
