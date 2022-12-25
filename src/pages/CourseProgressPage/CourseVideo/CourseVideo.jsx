import React from 'react';
import styles from './style.module.css';

const CourseVideo = (workoutVideo) => {
  const VIDEO_ID = workoutVideo.workoutVideo;
  const videoUrl = `http://www.youtube.com/embed/${VIDEO_ID}`;
  console.log(videoUrl);

  return (
    <div className={styles.container}>
      <iframe
        width="1160"
        height="639"
        src={`${videoUrl}?modestbranding=1&autoplay=0&rel=0&color=white;`}
      ></iframe>
    </div>
  );
};

export default CourseVideo;
