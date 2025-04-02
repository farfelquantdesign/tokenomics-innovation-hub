
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleInitialAnimation = () => {
      const animatedElements = document.querySelectorAll('[data-animate="true"]');
      
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.remove('opacity-0', 'translate-y-4', 'translate-y-8');
          element.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    // Short delay to ensure elements are properly rendered
    const timer = setTimeout(() => {
      handleInitialAnimation();
    }, 300);
    
    return () => clearTimeout(timer);
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
