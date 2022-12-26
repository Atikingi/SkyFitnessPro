import Header from '../../components/Header/Header';
import { Title } from './Title/Title';
import { ProfCard } from '../../components/ProfCard/ProfCard';
import { Footer } from './Footer/Footer';
import Loader from '../../components/Loader/Loader';
import { useFetchCoursesQuery } from '../../services/fitnessApi';
import themesGenerator from '../../lib/themesGenerator';
import { cardsColors } from '../../constants/colorsArrays';
import { motion } from 'framer-motion';
import styles from './style.module.css';
export const MainFitnessPage = () => {
  const { data, isSuccess, isLoading } = useFetchCoursesQuery('');

  function setColorOnClick(color) {
    localStorage.setItem('color', color);
  }

  function focusTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  let themeArr;

  if (isSuccess) {
    themeArr = themesGenerator(cardsColors, data);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className={styles.main}
    >
      <Header logoColor="#ffffff" lightColor={true} />
      <Title />
      <div className={styles.cardsBlock}>
        {isLoading && <Loader />}
        {isSuccess &&
          data.map(({ name, _id }, i) => (
            <ProfCard
              setColorOnClick={() => setColorOnClick(themeArr[i])}
              key={_id}
              courseName={name}
              id={_id}
              color={themeArr[i]}
            />
          ))}
      </div>
      <Footer onClick={focusTop} />
    </motion.div>
  );
};
