import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoIosMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';



gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const linkRef = useRef();

    useGSAP(() => {
        if (linkRef.current) {
            gsap.to(linkRef.current, {
                y: -100,                 
                opacity: 0,              
                ease: "power1.out",      
                scrollTrigger: {
                    trigger: "#page1",     
                    start:"top 150",     
                    end:"bottom top",
                    scrub: true,                    
                },
            });
        }
    }, []);

    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <h1>two good co.</h1>
                </div>

                <div  className="navlinks">
                    <div className='links'ref={linkRef} >
                        {["shop", "catering", "donate"].map((item, index) => (
                            <Link  className='links' key={index}>
                                {item}
                            </Link>
                        ))}
                    </div>
                    <div className="icons">
                        <IoIosMenu size={"2vw"} />
                        <IoCartOutline size={"2vw"} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
