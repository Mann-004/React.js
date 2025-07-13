import React, { useRef } from 'react'
import "./Page2.css"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

    const contentRef =useRef()

    useGSAP(()=>{
        console.log(contentRef)
        gsap.from(".left",{
            x:-100,
            duration:1,
            opacity:0,
            scrollTrigger:{
                trigger:".left",
                scroller:"[data-scroll-container]",
                start:"top 90%",
                markers:true

            }

        })
    })

    return (
        <>
            <div className="page2">
                <div className="content">
                    <div className="left">
                        We believe in people,
                        until they believe in themselves again.
                    </div>
                    <div className="right">
                        Everything we do is designed to rebuild self worth and independence, in order to break free from the cycle of disadvantage. With every purchase you make with us, you're helping to change the course of someone's life; you're walking alongside vulnerable women as they find their way home again.
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page2
