import React from 'react';
import { motion } from 'framer-motion';
import OchiCard from '../components/OchiCard';

const Review = () => {
    return (
        <section className='bg-[#f1f1f1] w-full min-h-screen font-["Neue_Montreal"] overflow-hidden'>
            <div className="px-10 py-20">
                <h1 className='text-[4.5vw] tracking-tight leading-none text-[#212121]'>
                    Client's Reviews
                </h1>
            </div>
            <hr className="bg-zinc-400 h-[1.5px] mb-5" />
            <article className='w-full px-10 py-2 flex gap-4 min-h-screen tracking-tight'>
                <div className='w-1/2'>
                    <div className='w-full flex justify-between'>
                        <div>Karman Ventures</div>
                        <div className='flex flex-col gap-3 mr-[10rem]'>
                            <div>Services:</div>
                            <button className='px-3 py-0.5 rounded-full border-[1.5px] border-[#212121] uppercase mt-10'>
                                investor desk
                            </button>
                            <button className='px-3 py-0.5 rounded-full border-[1.5px] border-[#212121] uppercase'>
                                sales desk
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div>William Barnes</div>
                    <motion.div
                        className="img w-[10vw] h-[10vw] rounded-3xl bg-[url('https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png')] bg-cover mt-20"
                        initial={{
                            scale: 0.8, opacity: 0
                        }}
                        whileInView={{
                            scale: 1, opacity: 1
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5
                        }}
                        transition={{
                            duration: 1
                        }}
                    ></motion.div>

                    <motion.div
                        className='inline-block w-[65%] mt-10'
                        initial={{
                            x: "100%", opacity: 0
                        }}
                        whileInView={{
                            x: "0%", opacity: 1
                        }}
                        viewport={{
                            once: true, amount: 0.3
                        }}
                        transition={{
                            duration: 1.5, ease: "easeOut"
                        }}
                    >
                        They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                    </motion.div>
                </div>

            </article>



            {/* faq's */}
            <div className='w-full  '>
                <hr className="bg-zinc-400 h-[1.5px] " />
                <div className='relative'>
                    <div

                        className='flex items-center justify-between px-10 py-5 capitalize'>

                        <div>
                            planety
                        </div>
                        <div>

                            Nina Walloch
                        </div>
                        <div>
                            read
                        </div>
                    </div>

                </div>
                <hr className="bg-zinc-400 h-[1.5px] " />
                <div className='relative'>
                    <div

                        className='flex items-center justify-between px-10 py-5 capitalize'>

                        <div>
                            planety
                        </div>
                        <div>

                            Nina Walloch
                        </div>
                        <div>
                            read
                        </div>
                    </div>

                </div>
                <hr className="bg-zinc-400 h-[1.5px] " />
                <div className='relative'>
                    <div

                        className='flex items-center justify-between px-10 py-5 capitalize'>

                        <div>
                            planety
                        </div>
                        <div>

                            Nina Walloch
                        </div>
                        <div>
                            read
                        </div>
                    </div>

                </div>
                <hr className="bg-zinc-400 h-[1.5px] " />
                <div className='relative'>
                    <div

                        className='flex items-center justify-between px-10 py-5 capitalize'>

                        <div>
                            planety
                        </div>
                        <div>

                            Nina Walloch
                        </div>
                        <div>
                            read
                        </div>
                    </div>

                </div>
                <hr className="bg-zinc-400 h-[1.5px] " />
                <div className='relative'>
                    <div

                        className='flex items-center justify-between px-10 py-5 capitalize'>

                        <div>
                            planety
                        </div>
                        <div>

                            Nina Walloch
                        </div>
                        <div>
                            read
                        </div>
                    </div>

                </div>
                <hr className="bg-zinc-400 h-[1.5px] " />
                <div className='relative'>
                    <div

                        className='flex items-center justify-between px-10 py-5 capitalize'>

                        <div>
                            planety
                        </div>
                        <div>

                            Nina Walloch
                        </div>
                        <div>
                            read
                        </div>
                    </div>

                </div>
                <hr className="bg-zinc-400 h-[1.5px] " />
                <div className='relative'>
                    <div

                        className='flex items-center justify-between px-10 py-5 capitalize'>

                        <div>
                            planety
                        </div>
                        <div>

                            Nina Walloch
                        </div>
                        <div>
                            read
                        </div>
                    </div>

                </div>
            </div>
            <OchiCard/>

        </section>
    );
};

export default Review;
