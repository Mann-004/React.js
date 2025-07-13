
import Navbar from '../components/Navbar'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import contentimg from '../assets/content-image01.jpg';






const HomePage = () => {
    return (
        <>
            <div data-scroll data-scroll-speed="-.4" className="home w-full h-screen bg-[#f2f2f2] text-black">
                <Navbar />
                <div className="heading px-10 py-16 mt-7">
                    {
                        ["We create", "eye-opening", "presentations"].map((item, index) => (
                            <div className="para" >
                                <motion.h1 key={index}
                                    className={`text-[8vw] leading-none tracking-[-7px] uppercase font-bold font-["Test Founders Grotesk X-Condensed"] text-[#212121] `}>
                                    {index == 1 &&
                                        <motion.div
                                            style={{ backgroundImage: `url(${contentimg})` }}
                                            className={`h-[5.5vw] w-[10vw] inline-block rounded-lg bg-cover`}>
                                        </motion.div>}
                                    {item}</motion.h1>
                            </div>
                        ))
                    }
                </div>

                <hr className='bg-zinc-300 h-[1.5px]' />
                <div className="ft flex justify-between items-center px-10 py-4 text-[#212121] leading-none tracking-tighter ">
                    {
                        [
                            "For public and private companies",
                            "From the first pitch to IPO",
                            "start the project"
                        ].map((item, index) => (
                            <div className='flex justify-center items-center'>
                                <div
                                    className={`${index === 2 && "px-5 border-zinc-600 border-[1.5px] py-2 rounded-full uppercase  "}`}
                                >
                                    {item}
                                </div>
                                {index === 2 && (
                                    <FaArrowRightLong className='rotate-[-45deg] ml-3 ' />
                                )}
                            </div>
                        ))

                    }

                </div>


            </div>

        </>
    )
}

export default HomePage