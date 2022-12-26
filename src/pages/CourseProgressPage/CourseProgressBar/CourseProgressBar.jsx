import { useSelector } from 'react-redux';
import styles from './style.module.css';

const CourseProgressBar = ({ colorNumber, id }) => {
  const currentProgress = Math.floor(useSelector((state) => state.progress.progress[id]));

  const blueStyle = {
    background: `linear-gradient(90deg, rgba(86, 94, 239, 1) ${currentProgress}%, rgba(237, 236, 255, 1) ${currentProgress}%)`,
    border: '2px solid #565eef'
  };

  const orangeStyle = {
    background: `linear-gradient(90deg, rgba(255, 109, 0, 1) ${currentProgress}%, rgba(255, 242, 224, 1) ${currentProgress}%)`,
    border: '2px solid #ff6d00'
  };

  const purpleStyle = {
    background: `linear-gradient(90deg, rgba(154, 72, 241, 1) ${currentProgress}%, rgba(249, 235, 255, 1) ${currentProgress}%)`,
    border: '2px solid #9a48f1'
  };

  const yellowStyle = {
    background: `linear-gradient(90deg, rgb(208, 245, 59) ${currentProgress}%, rgba(249, 235, 255, 1) ${currentProgress}%)`,
    border: '2px solid #e6f764'
  };

  const greenStyle = {
    background: `linear-gradient(90deg, rgb(19, 102, 44) ${currentProgress}%, rgba(249, 235, 255, 1) ${currentProgress}%)`,
    border: '2px solid #42a342'
  };

  const redStyle = {
    background: `linear-gradient(90deg, rgb(241, 72, 72) ${currentProgress}%, rgba(249, 235, 255, 1) ${currentProgress}%`,
    border: '2px solid #f76464'
  };

  const barColor = [blueStyle, orangeStyle, purpleStyle, greenStyle, yellowStyle, redStyle];

  return (
    <div style={barColor[colorNumber]} className={`${styles.progressBar}`}>
      <span className={styles.percents}>{`${currentProgress}%`}</span>
    </div>
  );
};

export default CourseProgressBar;
