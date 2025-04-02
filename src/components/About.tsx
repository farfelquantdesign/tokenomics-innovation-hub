
import { CircleCheck, TrendingUp, Zap, Award } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const animatedElements = document.querySelectorAll('[data-animate="true"]');
      
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.remove('opacity-0', 'translate-y-8');
          element.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    // Run once to check for elements already in view on load
    handleScrollAnimation();
    
    window.addEventListener('scroll', handleScrollAnimation);
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center opacity-0 translate-y-8 transition-all duration-1000" data-animate="true">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">About Quantdesign</h2>
          <p className="text-lg text-quantblack-700">
            Quantdesign is the industry leader in tokenomics and active supply management. 
            We believe in creating digital assets with sustainable long-term value for all stakeholders.
          </p>
          <p className="text-lg text-quantblack-700 mt-4">
            Our team combines expertise in statistics, finance, and blockchain technology to design custom 
            solutions that stand up to crypto market volatility.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            className="bg-white p-6 rounded-sm shadow-sm border border-quantbeige-100 opacity-0 translate-y-8 transition-all duration-1000 delay-100" 
            data-animate="true"
          >
            <div className="text-3xl font-semibold mb-2">4+</div>
            <div className="text-quantblack-600">Years of Leadership</div>
          </div>
          <div 
            className="bg-white p-6 rounded-sm shadow-sm border border-quantbeige-100 opacity-0 translate-y-8 transition-all duration-1000 delay-300" 
            data-animate="true"
          >
            <div className="text-3xl font-semibold mb-2">100+</div>
            <div className="text-quantblack-600">Projects Supported</div>
          </div>
          <div 
            className="bg-white p-6 rounded-sm shadow-sm border border-quantbeige-100 opacity-0 translate-y-8 transition-all duration-1000 delay-500" 
            data-animate="true"
          >
            <div className="text-3xl font-semibold mb-2">$7B+</div>
            <div className="text-quantblack-600">Assets Supported</div>
          </div>
          <div 
            className="bg-white p-6 rounded-sm shadow-sm border border-quantbeige-100 opacity-0 translate-y-8 transition-all duration-1000 delay-700" 
            data-animate="true"
          >
            <div className="text-3xl font-semibold mb-2">11</div>
            <div className="text-quantblack-600">Integrated Processes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
