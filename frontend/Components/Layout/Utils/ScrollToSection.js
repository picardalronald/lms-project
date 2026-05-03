// src/Utils/ScrollToSection.js
import { getLenis } from "./Lenis";

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const lenis = getLenis();

  if (!element) {
    console.warn(`Target element #${id} not found. Check your IDs in Body.jsx`);
    return;
  }

  if (lenis) {
    // Premium Smooth Scroll
    lenis.scrollTo(element, {
      offset: -80, 
      duration: 1.5,
    });
  } else {
    // Browser Fallback
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};