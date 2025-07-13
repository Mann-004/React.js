import React, { useEffect, useRef } from 'react';
import "./Play.css";
import video from "../../assets/video.mp4";
import gsap from 'gsap';

const Play = () => {
  const videoContainerRef = useRef(null);
  const playButtonRef = useRef(null);

  useEffect(() => {
    const videoCon = videoContainerRef.current;
    const playBtn = playButtonRef.current;

    const handleMouseEnter = () => {
      gsap.to(playBtn, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(playBtn, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseMove = (e) => {
      const bounds = videoCon.getBoundingClientRect();
      const x = e.clientX ;
      const y = e.clientY;

      gsap.to(playBtn, {
        left: x - 100,  
        top: y - 100,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    videoCon.addEventListener("mouseenter", handleMouseEnter);
    videoCon.addEventListener("mouseleave", handleMouseLeave);
    videoCon.addEventListener("mousemove", handleMouseMove);

    return () => {
      videoCon.removeEventListener("mouseenter", handleMouseEnter);
      videoCon.removeEventListener("mouseleave", handleMouseLeave);
      videoCon.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="videoContainer" ref={videoContainerRef}>
      <div className="play">
        <div className="playbutton" ref={playButtonRef}>play</div>
        <video src={video} autoPlay muted loop />
      </div>
    </div>
  );
};

export default Play;
