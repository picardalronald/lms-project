import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../../Components/Layout/Utils/ScrollToSection";
import Header from "../../Components/Layout/HomeLayout/Header";
import Body from "../../Components/Layout/HomeLayout/Body";
import About from "../../Components/Layout/HomeLayout/About";
import Footer from "../../Components/Layout/HomeLayout/Footer";


export default function Homepage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Delay ensures Lenis and DOM are ready
      const timer = setTimeout(() => {
        scrollToSection(id);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div className="selection:bg-[#3D967C] selection:text-white">
      <Header />
      <Body />
      <About />
      <Footer />
    </div>
  );
}