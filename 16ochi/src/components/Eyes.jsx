import React, { useEffect, useRef, useState } from 'react';

const Eyes = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [pupilPos, setPupilPos] = useState({
    left: { x: 0, y: 0 },
    right: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const movePupil = (eyeRef) => {
        if (!eyeRef.current) return { x: 0, y: 0 };

        const rect = eyeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        const angle = Math.atan2(dy, dx);
        const maxDist = rect.width * 0.25; 

        return {
          x: Math.cos(angle) * maxDist,
          y: Math.sin(angle) * maxDist,
        };
      };

      setPupilPos({
        left: movePupil(leftEyeRef),
        right: movePupil(rightEyeRef),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover cursor-pointer">
      <div className="imgConatiner w-full h-screen bg-cover relative">
        <div className="absolute top-1/3 left-1/2 transform -translate-y-[50%] -translate-x-[50%] flex gap-6">

          {/* Left Eye */}
          <div className="bg-white h-[15vw] w-[15vw] rounded-full relative top-20">
            <div
              ref={leftEyeRef}
              className="bg-zinc-900 w-2/3 h-2/3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            >
              <div
                className="bg-white h-12 w-12 rounded-full absolute "
                style={{
                  transform: `translate(calc(-50% + ${pupilPos.left.x}px), calc(-50% + ${pupilPos.left.y}px))`,
                  top: '50%',
                  left: '50%',
                }}
              ></div>
            </div>
          </div>

          {/* Right Eye */}
          <div className="bg-white h-[15vw] w-[15vw] rounded-full relative top-20">
            <div
              ref={rightEyeRef}
              className="bg-zinc-900 w-2/3 h-2/3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            >
              <div
                className="bg-white h-12 w-12 rounded-full absolute"
                style={{
                  transform: `translate(calc(-50% + ${pupilPos.right.x}px), calc(-50% + ${pupilPos.right.y}px))`,
                  top: '50%',
                  left: '50%',
                }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eyes;
