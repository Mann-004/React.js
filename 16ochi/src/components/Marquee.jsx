import React ,{useEffect}from 'react'
import{motion } from "framer-motion"




const Marquee = () => {
  

  return (
    <>
    <div  data-scroll data-scroll-speed=".1"   className="marquee py-15 bg-[#004d43] w-full rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      <motion.div
      initial={{x: "0%"}}
      animate={{x: "-100%"}}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration:5
      }}
       className="innerMarquee flex  whitespace-nowrap pr-10">
        <h1 className="text-[18vw] tracking-tight leading-nono font-['Neue_Montreal'] font-extrabold uppercase text-white">we are ochi </h1>
        <h1 className="text-[18vw] tracking-tight leading-nono font-['Neue_Montreal'] font-extrabold uppercase text-white">we are ochi </h1>
        
      </motion.div>
    </div>
  
    
    </>
  )
}

export default Marquee
