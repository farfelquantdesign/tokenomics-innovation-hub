
import { ArrowUp, TrendingUp, Coins, DollarSign } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
                {/* Financial animation with chart and coins */}
                <div className="w-2/3 h-2/3 flex items-center justify-center relative">
                  {/* Trending chart line */}
                  <TrendingUp 
                    className="absolute text-quantbeige-50/70 w-12 h-12 animate-float" 
                    strokeWidth={1.5}
                  />
                  {/* Dollar sign with pulse animation */}
                  <DollarSign 
                    className="absolute text-quantbeige-50 w-10 h-10 animate-pulse-slow" 
                    strokeWidth={2}
                  />
                  {/* Coins with slight animation */}
                  <Coins 
                    className="absolute text-quantbeige-50/80 w-8 h-8 -translate-x-8 translate-y-4 animate-float" 
                    strokeWidth={1.5} 
                    style={{ animationDelay: '0.5s' }}
                  />
                  {/* Circle border */}
                  <div className="w-full h-full border-2 border-quantbeige-50/20 rounded-full"></div>
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
