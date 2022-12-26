import CentralBlock from './CentralBlock/CentralBlock';
import MyCoursesBlock from './MyCoursesBlock/MyCoursesBlock';
import Header from '../../components/Header/Header';
import styles from './style.module.css';

const UserProfile = () => {
  return (
    <div className={styles.userProfile}>
      <Header logoColor="#000000" />
      <CentralBlock />
      <MyCoursesBlock />
    </div>
  );
};

export default UserProfile;
