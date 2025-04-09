
import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const chartRef = useRef<SVGSVGElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Set up the continuous animation for the chart
  useEffect(() => {
    if (isVisible && chartRef.current) {
      // Create keyframes for continuous price movement
      const createKeyframes = () => {
        const keyframes = `
          @keyframes price-movement {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `;
        
        // Add the keyframes to the document
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);
        
        return () => {
          document.head.removeChild(styleSheet);
        };
      };
      
      const cleanupKeyframes = createKeyframes();
      
      // Apply animation to the chart element
      const chartLine = chartRef.current.querySelector('.price-line-container');
      if (chartLine) {
        chartLine.classList.add('animate-price');
      }
      
      return () => {
        cleanupKeyframes();
      };
    }
  }, [isVisible]);

  return (
    <footer ref={footerRef} className="bg-quantbeige py-12">
      <div className="container mx-auto px-6">
        <div className="mb-16 bg-quantblack text-quantbeige-50 p-10 md:p-16 rounded-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Trusted Expertise and Seamless Execution</h3>
              <p className="mb-8 text-quantbeige-100">
                Quantdesign is a referral only business. Reach out and get in touch.
              </p>
            </div>
            <div className="hidden md:block bg-quantblack-800 p-6 overflow-hidden">
              {/* Financial chart with continuous animation */}
              <div className="w-full h-48 relative">
                {/* Chart grid lines */}
                <svg 
                  ref={chartRef}
                  className="w-full h-full" 
                  viewBox="0 0 100 50" 
                  preserveAspectRatio="none"
                >
                  {/* Chart grid lines - background */}
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  
                  {/* Vertical grid lines */}
                  <line x1="0" y1="0" x2="0" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="20" y1="0" x2="20" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="40" y1="0" x2="40" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="60" y1="0" x2="60" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="80" y1="0" x2="80" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="100" y1="0" x2="100" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  
                  {/* Animated price line container - this will hold the repeating pattern */}
                  <g className="price-line-container" style={{ 
                    animation: isVisible ? 'price-movement 20s linear infinite' : 'none',
                    transformOrigin: 'left center'
                  }}>
                    {/* First segment of the chart - will be repeated */}
                    <path
                      d="M0,35 
                         L5,32 
                         L10,34 
                         L15,31 
                         L20,33 
                         L25,30 
                         L30,28 
                         L35,31 
                         L40,27 
                         L45,29 
                         L50,25 
                         L55,27 
                         L60,23 
                         L65,21 
                         L70,24 
                         L75,19 
                         L80,16 
                         L85,18 
                         L90,15 
                         L95,12 
                         L100,10"
                      fill="none"
                      stroke="rgba(245, 242, 234, 0.8)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="price-line"
                    />
                    
                    {/* Duplicate of the first segment, positioned to create seamless loop */}
                    <path
                      d="M100,35 
                         L105,32 
                         L110,34 
                         L115,31 
                         L120,33 
                         L125,30 
                         L130,28 
                         L135,31 
                         L140,27 
                         L145,29 
                         L150,25 
                         L155,27 
                         L160,23 
                         L165,21 
                         L170,24 
                         L175,19 
                         L180,16 
                         L185,18 
                         L190,15 
                         L195,12 
                         L200,10"
                      fill="none"
                      stroke="rgba(245, 242, 234, 0.8)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="price-line"
                    />
                    
                    {/* Pulsing dot that follows the end of visible line */}
                    <circle
                      cx="100"
                      cy="10"
                      r="1.5"
                      fill="#f5f2ea"
                      className="animate-pulse-slow"
                    />
                  </g>
                </svg>
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
