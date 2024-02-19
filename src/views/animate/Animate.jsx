import React, { useRef } from 'react';
import { animateImg, scrollanimation } from '../../assets';
import './Animate.css';

const Animate = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reinicia el video al principio

      setTimeout(() => {
        videoRef.current.play(); // Inicia la reproducción nuevamente después de 1 segundo
      }, 5000);
    }
  };

  return (
    <div className='animate'>
      <div className="animate__video">
        <video
          ref={videoRef}
          src={scrollanimation}
          type="video/mp4"
          controls={false}
          muted
          autoPlay
          onEnded={handleVideoEnd}
        />
      </div>
      <div className='animate__image'>
        <img src={animateImg} alt="" />
      </div>
    </div>
  );
};

export default Animate;