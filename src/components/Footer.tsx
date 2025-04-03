
import { ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animate the price chart path when component mounts
    if (chartRef.current) {
      const path = chartRef.current.querySelector('path');
      if (path) {
        const length = path.getTotalLength();
        
        // Set up initial state - the path is invisible
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        
        // Trigger animation
        setTimeout(() => {
          path.style.transition = 'stroke-dashoffset 2s ease-in-out';
          path.style.strokeDashoffset = '0';
        }, 300);
      }
    }
  }, []);

  return (
    <footer className="bg-quantbeige py-12">
      <div className="container mx-auto px-6">
        <div className="mb-16 bg-quantblack text-quantbeige-50 p-10 md:p-16 rounded-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Trusted Expertise and Seamless Execution</h3>
              <p className="mb-8 text-quantbeige-100">
                Quantdesign is a referral only business. Reach out and get in touch.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-quantblack-800 to-quantblack-900 rounded-full flex items-center justify-center relative">
                {/* Financial chart animation */}
                <div className="w-3/4 h-3/4 flex items-center justify-center relative">
                  {/* Price chart */}
                  <svg 
                    ref={chartRef}
                    className="w-full h-full" 
                    viewBox="0 0 100 50" 
                    preserveAspectRatio="none"
                  >
                    {/* Chart grid lines */}
                    <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                    <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                    <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                    <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                    
                    {/* Price path - gradually up with minor dips */}
                    <path
                      d="M0,40 
                         L10,35 
                         L20,32 
                         L30,35 
                         L40,30 
                         L50,25 
                         L60,27 
                         L70,22 
                         L80,18 
                         L90,20 
                         L100,15"
                      fill="none"
                      stroke="rgba(245, 242, 234, 0.8)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="price-line"
                    />
                    
                    {/* Moving dot at the end of the line */}
                    <circle
                      cx="100"
                      cy="15"
                      r="1.5"
                      fill="#f5f2ea"
                      className="animate-pulse-slow"
                    />
                  </svg>
                  
                  {/* Circle border */}
                  <div className="absolute w-full h-full border-2 border-quantbeige-50/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/aac68da7-9dd6-49e4-af12-88d51162dbf2.png" 
              alt="Quantdesign Logo" 
              className="h-8 mb-6"
            />
            <p className="text-quantblack-700 mb-6 max-w-md">
              The industry leader in tokenomics and market making setup, 
              providing productized service packages for digital assets.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-quantblack-700 hover:text-quantblack transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-quantbeige-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-quantblack-700 text-sm">
            &copy; {currentYear} Quantdesign. All rights reserved.
          </p>
          <a 
            href="#home" 
            className="mt-4 md:mt-0 flex items-center text-quantblack-700 hover:text-quantblack transition-colors"
          >
            Back to top <ArrowUp className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
