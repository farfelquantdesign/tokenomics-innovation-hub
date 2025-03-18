
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center pt-16 relative overflow-hidden bg-quantbeige"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/309775e7-bf4a-409c-ba27-cb28e12d044f.png" 
              alt="Quantdesign Logo" 
              className="h-16 md:h-24" 
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight animate-fade-in">
            The First Integrated<br className="hidden sm:block" />
            <span className="font-semibold">Token Solutions Firm</span>
          </h1>
          
          <p className="text-lg md:text-xl text-quantblack/70 max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-200">
            Productized service packages for new token issuances 
            and existing liquid tokens, designed with analytical precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in animation-delay-300">
            <a 
              href="#services" 
              className="bg-quantblack text-quantbeige px-7 py-3 rounded-sm hover:bg-quantblack-800 transition-all duration-300"
            >
              Explore Services
            </a>
            <a 
              href="#about" 
              className="border border-quantblack/20 px-7 py-3 rounded-sm hover:bg-quantblack/5 transition-all duration-300"
            >
              Our Approach
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-quantbeige-200 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-quantbeige-200 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center text-quantblack/50 hover:text-quantblack transition-colors duration-300">
          <span className="text-xs mb-2">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
