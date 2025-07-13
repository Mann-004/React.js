import React, { useRef } from 'react';
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const headingRef = useRef(); // ref to the container div

  useGSAP(() => {
    gsap.from(".heading h1", {
      y: 100,
      opacity: 0,
      delay: 0.2,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="home" id="main">
      <Navbar />

      <div id="page1" className="heading" ref={headingRef}>
        {
          ["change", "the", "course"].map((item, index) => (
            <h1 key={index}>{item}</h1>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
