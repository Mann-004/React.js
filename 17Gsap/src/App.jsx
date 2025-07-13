
import Card from './components/Card/Card'
import Play from './components/Play/Play'
import Home from './pages/Home/Home'
import Page2 from './pages/Page2/Page2'
import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
function App() {
  const containerRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
    });
    scroll.update();

    return () => {
      scroll.destroy();
    };
  }, []);


  return (
    <>
      <main data-scroll-container ref={containerRef}>

        <Home />
        <Play />
        <Card />
        <Page2 />
      </main>



    </>
  )
}

export default App
