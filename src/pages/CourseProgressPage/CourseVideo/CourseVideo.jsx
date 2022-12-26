import PlayButtonIcon from '../../../components/Icons/PlayButtonIcon';
import { useState } from 'react';
import styles from './style.module.css';

const CourseVideo = ({ workoutVideo }) => {
  const videoUrl = `https://www.youtube.com/embed/${workoutVideo}`;

  const [play, setPlay] = useState(false);

  const playHandler = () => {
    setPlay(true);
  };

  if (play) {
    return (
      <div className={styles.container}>
        <iframe
          width="1160"
          height="639"
          src={`${videoUrl}?modestbranding=1&autoplay=1&rel=0&color=white;`}
        ></iframe>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src="/img/video-preview.jpg" width="1160" height="639" alt="Видео тренировки" />
        <div className={styles.playButton} onClick={playHandler}>
          <PlayButtonIcon />
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
