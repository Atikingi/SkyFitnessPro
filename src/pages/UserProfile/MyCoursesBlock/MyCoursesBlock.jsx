import HeadingMyCourses from './HeadingMyCourses/HeadingMyCourses';
import MyCoursesContent from './MyCoursesContent/MyCoursesContent';
import styles from './style.module.css';

const MyCoursesBlock = () => {
  return (
    <div className={styles.myCoursesBlock}>
      <HeadingMyCourses />
      <MyCoursesContent />
    </div>
  );
};

export default MyCoursesBlock;
