
import { ArrowUp, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-quantbeige py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/309775e7-bf4a-409c-ba27-cb28e12d044f.png" 
              alt="Quantdesign Logo" 
              className="h-8 mb-6"
            />
            <p className="text-quantblack-700 mb-6 max-w-md">
              The industry leader in tokenomics and market making setup, 
              providing productized service packages for digital assets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-quantblack-700 hover:text-quantblack transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-quantblack-700 hover:text-quantblack transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-quantblack-700 hover:text-quantblack transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-quantblack-700 hover:text-quantblack transition-colors">
                  Token Issuance
                </a>
              </li>
              <li>
                <a href="#services" className="text-quantblack-700 hover:text-quantblack transition-colors">
                  Liquid Token Improvement
                </a>
              </li>
              <li>
                <a href="#services" className="text-quantblack-700 hover:text-quantblack transition-colors">
                  Quantdesign Incubator
                </a>
              </li>
              <li>
                <a href="#services" className="text-quantblack-700 hover:text-quantblack transition-colors">
                  Consulting Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-quantblack-700 hover:text-quantblack transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-quantblack-700 hover:text-quantblack transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-quantblack-700 hover:text-quantblack transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-quantblack-700 hover:text-quantblack transition-colors">
                  Terms of Service
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
