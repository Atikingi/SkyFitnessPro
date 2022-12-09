import { Outlet } from 'react-router-dom';
import styles from './style.module.css';
const Layout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default Layout;
