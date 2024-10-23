import React, { useState } from 'react';
import './Video.css'; // Make sure to import the CSS file
import mealmate from '../../assets/mealmate.mp4';
const Video = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const closeVideo = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`video-container ${isFullScreen ? 'fullscreen' : 'small'}`}>
      <video controls className="video-player" autoPlay muted loop>
        <source src={mealmate} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="fullscreen-btn" onClick={toggleFullScreen}>
        {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>
      <button className="close-btn" onClick={closeVideo}>x</button>
    </div>
  );
};

export default Video;
