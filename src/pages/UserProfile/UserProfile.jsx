import CentralBlock from './CentralBlock/CentralBlock';
import MyCoursesBlock from './MyCoursesBlock/MyCoursesBlock';
import Header from '../../components/Header/Header';
import { motion } from 'framer-motion';
import styles from './style.module.css';

const UserProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className={styles.userProfile}
    >
      <Header logoColor="#000000" />
      <CentralBlock />
      <MyCoursesBlock />
    </motion.div>
  );
};

export default UserProfile;
