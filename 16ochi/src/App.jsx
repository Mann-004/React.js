import { useEffect, useRef } from 'react'
import HomePage from './pages/HomePage'
import Marquee from './components/Marquee'
import AboutPage from './pages/AboutPage'
import Eyes from './components/Eyes'
import LocomotiveScroll from 'locomotive-scroll';
import FeaturesPage from './pages/FeaturesPage'
import Review from './pages/Review'
import Ready from './pages/Ready'


function App() {
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
    <div data-scroll >
      <HomePage/>
      <Marquee/>
      <AboutPage/>
      <Eyes/>
      <FeaturesPage/>
      <Review/>
      <Ready/>
    

    </div>
    </>


  )
}

export default App
