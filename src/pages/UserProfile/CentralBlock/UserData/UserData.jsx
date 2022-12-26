import UserDataContent from './UserDataContent/UserDataContent';
import styles from './styles.module.css';

const UserData = () => {
  return (
    <div className={styles.userDataContainer}>
      <UserDataContent />
    </div>
  );
};

export default UserData;
