// src/Components/Layout/HomeLayout/LenisProvider.jsx
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../Utils/Lenis'; 

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    setLenis(lenis);
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return <>{children}</>;
}