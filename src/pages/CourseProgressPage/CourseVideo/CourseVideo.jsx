import React from 'react';
import styles from './style.module.css';
import PlayButtonIcon from '../../../components/Icons/PlayButtonIcon';
import { useState } from 'react';

const CourseVideo = (workoutVideo) => {
  console.log(workoutVideo.workoutVideo);
  const VIDEO_ID = 'UjVtcMD4On4';
  const [showVideo, setShowVideo] = useState(false);

  const ClickShowVideo = (event) => {
    event.preventDefault();
    setShowVideo((prevState) => !prevState);
    console.log(showVideo);
  };
  return (
    <div className={styles.container}>
      {/* <div className={styles.imageWrapper}>
        <img src="/img/video-preview.jpg" width="1160" height="639" alt="Видео тренировки" />
        <div className={styles.playButton} onClick={ClickShowVideo}>
          <PlayButtonIcon />
        </div>
      </div>
      {showVideo && ( */}
      <iframe
        width="1160"
        height="639"
        src={`http://www.youtube.com/embed/${VIDEO_ID}?modestbranding=1&autoplay=0&rel=0&color=white;`}
      ></iframe>
      {/* )} */}
    </div>
  );
};

export default CourseVideo;
