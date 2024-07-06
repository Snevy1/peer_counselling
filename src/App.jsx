import HeaderSection from "./global/header"
import HomePage from "./pages/home"
import { Route, Routes } from 'react-router-dom';
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import FooterSection from "./global/footer";
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Set the duration (adjust as needed)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
    <div className="bg-bgHomeColor p-0 m-0 smooth-scroll" ref={lenisRef} >
    <HeaderSection />

    <main className="pt-16">
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    
    <Route path="/contact" element={<ContactPage />} />
  </Routes>

    </main>

  

    


    <FooterSection />
    </div>

    </>
  )
}

export default App
