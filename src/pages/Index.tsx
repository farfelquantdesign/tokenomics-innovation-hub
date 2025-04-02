
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const animatedElements = document.querySelectorAll('[data-animate="true"]');
      
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          if (element instanceof HTMLElement && element.style.animation === '') {
            element.classList.remove('opacity-0', 'translate-y-4', 'translate-y-8');
            element.classList.add('opacity-100', 'translate-y-0');
          }
        }
      });
    };

    // Initial check and scroll listener
    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-quantbeige">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
