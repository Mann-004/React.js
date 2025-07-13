import React from 'react';
import Cards from '../components/Cards';
import cardData from '../data/cardData';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';

const FeaturesPage = () => {

  return (
    <div className="bg-[#f1f1f1] w-full min-h-screen">
      <div className="px-10 py-20">
        <h1 className='text-[4.5vw] tracking-tighter leading-none text-[#212121] font-["Neue_Montreal"]'>
          Featured projects
        </h1>
      </div>

      <hr className="bg-zinc-400 h-[1.5px] mb-5" />

      <div className="minContainer w-full">
        <div className="container w-full px-10 py-20 flex gap-3 flex-wrap">
          {cardData.map((card, index) => (
            <Cards
              key={index}
              img={card.img}
              title={card.title}
              btnOneText={card.btnOneText}
              btnTwoText={card.btnTwoText}
            />
          ))}
        </div>
        <div className="btn w-full flex items-center justify-center">
          <motion.button
            initial="initial"
            whileHover="hover"
            className="pl-10 pr-3 py-2 rounded-full bg-zinc-900 text-white uppercase tracking-tighter border-[1.5px] font-['Neue_Montreal'] flex items-center gap-5"
          >
            view all case studies

            <motion.div
              variants={{
                initial: { scale: 0 },
                hover: { scale: 1 }
              }}
              className='w-10 h-10 bg-white rounded-full grid justify-center items-center rotate-[-45deg]'
            >
              <FaArrowRightLong color='black' />
            </motion.div>
          </motion.button>
        </div>

      </div>
    </div>
  );
};

export default FeaturesPage;
