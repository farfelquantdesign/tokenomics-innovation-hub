
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center pt-16 relative overflow-hidden bg-quantbeige-50"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/aac68da7-9dd6-49e4-af12-88d51162dbf2.png" 
              alt="Quantdesign Logo" 
              className="h-12 md:h-20" 
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight animate-fade-in animation-delay-200">
            The First Integrated<br className="hidden sm:block" />
            Token Solutions Firm
          </h1>
          
          <p className="text-lg md:text-xl text-quantblack/70 max-w-2xl mx-auto mb-10 opacity-0 transition-opacity duration-700 translate-y-4" 
             data-animate="true">
            Quantdesign is a full-stack provider of tailored processes focused on enhancing long term growth and creating sustainable value<br className="hidden sm:block" /> 
            for new token issuances and existing liquid assets.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-quantbeige-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-quantbeige-100 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
}
