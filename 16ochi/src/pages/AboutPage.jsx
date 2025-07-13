import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../assets/Homepage-Photo-1326x939.jpg"

const AboutPage = () => {
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed="-.1" className="about w-full  bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl -mt-10 ">
                <div className="container py-20 px-16">
                    <div className="haading font-['Neue_Montreal'] text-[4.5vw] tracking-tighter leading-none">
                        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
                    </div>
                </div>
                <hr className="h-[1px] bg-zinc-500" />

                <div className="py-20 px-16 flex justify-between h-screen">
                    <div>

                    <h1 className="text-[4vw] tracking-tighter leading-none font-['Neue_Montreal']">Our approach:</h1>
                    <button className="px-10 py-4 bg-[#212121] text-white rounded-full uppercase mt-4 flex justify-between items-center gap-4">read more
                        <FaArrowRightLong className=" rotate-[-45deg]  rounded-full bg-white h-[10px] w-[10px] "/>
                    </button>
                    </div>
                    <div className="image w-[50vw] h-[40vh]">
                        <img src={img} alt="img" className="rounded-2xl" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage
