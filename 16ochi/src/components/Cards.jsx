import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Cards = ({ img, title = "Untitled", btnOneText, btnTwoText }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true});
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 1.2, ease: 'easeOut' },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={controls}
      
      className="heading h-full w-[45vw]"
    >
      <div className="dot w-[1vw] h-[1vw] bg-black rounded-full inline-block"></div>
      <div className="inline-block ml-3 uppercase">{title}</div>

      <div className="w-full h-full mt-4">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-full h-[40vw] rounded-3xl bg-cover bg-center"
        /> 

        <div className="bottombtn mt-3 flex gap-2">
          {btnOneText && (
            <button className="px-5 py-0.5 uppercase border border-[#212121] rounded-2xl 
                   hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
              {btnOneText}
            </button>
          )}
          {btnTwoText && (
            <button className="px-5 py-0.5 uppercase border border-[#212121] rounded-2xl 
                   hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
              {btnTwoText}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
