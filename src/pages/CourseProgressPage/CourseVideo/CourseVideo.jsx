import React from 'react';
import styles from './style.module.css';
import PlayButtonIcon from '../../../components/icons/PlayButtonIcon';

const CourseVideo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src="/img/video-preview.jpg" width="1160" height="639" alt="Видео тренировки" />
        <div className={styles.playButton}>
          <PlayButtonIcon />
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
