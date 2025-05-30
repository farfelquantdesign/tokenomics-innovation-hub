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
      { threshold: 0.1 }
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

  useEffect(() => {
    if (isVisible && chartRef.current) {
      // Generate a stock-like path with an upward trend
      const generatePath = () => {
        const points = [];
        const numPoints = 100;
        let value = 5; // Starting value
        
        // Parameters to control the shape of the path
        const volatility = 2.25;
        const upwardBias = 0.05; // Increased upward bias
        
        for (let i = 0; i < numPoints; i++) {
          // Add upward bias to create the trend
          const randomChange = (Math.random() * 2 - 1 + upwardBias) * volatility;
          
          // Keep the value within reasonable bounds
          value = Math.max(5, Math.min(value + randomChange, 40));
          
          // Map to SVG coordinates
          const x = i * (100 / (numPoints - 1));
          const y = 50 - value; // Invert y-axis for SVG
          
          points.push([x, y]);
        }
        
        // Create SVG path string
        return points.map((point, i) => 
          `${i === 0 ? 'M' : 'L'}${point[0]},${point[1]}`
        ).join(' ');
      };

      const pathData = generatePath();
      
      // Apply the path to the SVG
      const chartLine = chartRef.current.querySelector('.chart-line');
      if (chartLine) {
        (chartLine as SVGPathElement).setAttribute('d', pathData);
      }

      // Configure animation
      const styleElement = document.createElement('style');
      styleElement.id = 'chart-animation-style';
      
      // Remove any existing styles
      if (document.getElementById('chart-animation-style')) {
        document.head.removeChild(document.getElementById('chart-animation-style')!);
      }

      // Define keyframes for both the line drawing and the moving dot
      // Set animation duration to 3 seconds and make it loop
      styleElement.textContent = `
        @keyframes draw-line {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        .chart-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-line 3s ease-in-out forwards infinite;
        }
        
        .chart-dot {
          opacity: 0;
          animation: follow-path 3s ease-in-out forwards infinite;
        }
        
        @keyframes follow-path {
          0% {
            offset-distance: 0%;
            opacity: 1;
          }
          100% {
            offset-distance: 100%;
            opacity: 1;
          }
        }
      `;
      
      document.head.appendChild(styleElement);
      
      // Apply the path to the dot's offset-path
      const chartDot = chartRef.current.querySelector('.chart-dot');
      if (chartDot) {
        (chartDot as SVGCircleElement).style.offsetPath = `path("${pathData}")`;
      }

      return () => {
        if (document.getElementById('chart-animation-style')) {
          document.head.removeChild(document.getElementById('chart-animation-style')!);
        }
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
              {/* Chart container */}
              <div className="w-full h-48 relative">
                <svg 
                  ref={chartRef}
                  className="w-full h-full" 
                  viewBox="0 0 100 50" 
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  <line x1="0" y1="0" x2="100" y2="0" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  
                  <line x1="0" y1="0" x2="0" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="20" y1="0" x2="20" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="40" y1="0" x2="40" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="60" y1="0" x2="60" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="80" y1="0" x2="80" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  <line x1="100" y1="0" x2="100" y2="50" stroke="rgba(245, 242, 234, 0.1)" strokeWidth="0.5" />
                  
                  {/* Animated chart line */}
                  <path
                    className="chart-line"
                    fill="none"
                    stroke="rgba(245, 242, 234, 0.8)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    d="M0,35 L100,15" // Initial path, will be replaced
                  />
                  
                  {/* Dot that follows the path */}
                  <circle
                    className="chart-dot"
                    r="2"
                    fill="#f5f2ea"
                    style={{
                      filter: "drop-shadow(0 0 3px rgba(245, 242, 234, 0.8))"
                    }}
                  />
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
