
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-navbar duration-500",
        scrolled 
          ? "bg-quantbeige-50/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold z-10">
          <span className="sr-only">Quantdesign</span>
          <img 
            src="/lovable-uploads/aac68da7-9dd6-49e4-af12-88d51162dbf2.png" 
            alt="Quantdesign Logo" 
            className="h-7"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium link-underline py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          type="button"
          className="md:hidden z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-quantbeige-50 z-0 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out transform",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#about"
            className="bg-quantblack text-quantbeige px-5 py-2 rounded-sm text-xl font-medium"
            onClick={() => setIsOpen(false)}
          >
            Learn More
          </a>
        </div>
      </nav>
    </header>
  );
}
